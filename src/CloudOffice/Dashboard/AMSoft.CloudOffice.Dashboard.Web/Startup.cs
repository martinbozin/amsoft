using System;
using System.IdentityModel.Tokens.Jwt;
using AMSoft.Base.Multitenancy;
using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Domain.CoreModels;
using AMSoft.CloudOffice.Web.Multitenantcy;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;

namespace AMSoft.CloudOffice.Web
{
    public class Startup : ExtCore.WebApplication.Startup
    {
        public Startup(IHostingEnvironment env, IServiceProvider serviceProvider) : base(serviceProvider)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            this.configurationRoot = builder.Build();
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            services.AddEntityFramework().AddDbContext<SqlServerApplicationDbContext>();
            // Add framework services.
            services.AddMvc();
            // Add Multitenancy service
            services.AddMultitenancy<AppTenant, CachingAppTenantResolver>();

            base.ConfigureServices(services);
        }

        public override void Configure(IApplicationBuilder app)
        {
            if (this.serviceProvider.GetService<IHostingEnvironment>().IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();
            app.UseMultitenancy<AppTenant>();

            app.UsePerTenant<AppTenant>((ctx, builder) =>
            {
                builder.UseCookieAuthentication(new CookieAuthenticationOptions
                {
                    AutomaticAuthenticate = true,
                    AutomaticChallenge = true,
                    AuthenticationScheme = CookieAuthenticationDefaults.AuthenticationScheme,
                    CookieName = $"{ctx.Tenant.Name}.Identity"
                });

                JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

                app.UseOpenIdConnectAuthentication(new OpenIdConnectOptions
                {
                    AutomaticAuthenticate = true,
                    AutomaticChallenge = true,

                    AuthenticationScheme = "oidc",
                    SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme,

                    DisplayName = $"{ctx.Tenant.Name} Identity Server",

                    Authority = "http://localhost:6010/",
                    RequireHttpsMetadata = false,

                    ClientId = "AMSoft.CloudOffice.Web",
                    ClientSecret = "secret",

                    ResponseType = "code id_token",
                    Scope = { "cloudoffice_api", "offline_access" },

                    GetClaimsFromUserInfoEndpoint = true,
                    SaveTokens = true,
                    TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = false
                    }
                });

                app.UseIdentityServerAuthentication(new IdentityServerAuthenticationOptions
                {
                    Authority = "http://localhost:6010",
                    RequireHttpsMetadata = false,
                    ApiName = "cloudoffice_api"
                });

                builder.UseMvc(routes =>
                {
                    routes.MapRoute("default", "{controller=Account}/{action=Login}/{id?}");
                });

            });

            base.Configure(app);
        }
    }
}
