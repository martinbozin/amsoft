using System;
using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;
using AMSoft.Base.Multitenancy;
using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Data.Interfaces;
using AMSoft.CloudOffice.Domain.CoreModels;
using AMSoft.CloudOffice.Web.Multitenantcy;
using AMSoft.CloudOffice.Web.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
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
            base.ConfigureServices(services);

            //Add EF services
            services.AddEntityFramework().AddDbContext<SqlServerApplicationDbContext>();
            services.AddScoped<ICloudOfficeDbContext, CloudOfficeDbContext>();

            // Injection
            services.AddScoped<CurrentUserService>();

            // Add framework services.
            services.AddMvc();
          
            // Add Multitenancy service
            services.AddMultitenancy<AppTenant, CachingAppTenantResolver>();
        }

        public override void Configure(IApplicationBuilder app)
        {
            base.Configure(app);

            if (this.serviceProvider.GetService<IHostingEnvironment>().IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                //  app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

            app.UseStaticFiles();
            app.UseMultitenancy<AppTenant>();

            //app.UsePerTenant<AppTenant>((ctx, builder) =>
            //{
            //    builder.UseMvc(routes =>
            //    {
            //        routes.MapRoute("default", "{controller=Home}/{action=Index}/{id?}");
            //    });
            //});

            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AutomaticAuthenticate = true,
                AuthenticationScheme = "cookies",
            });

            app.UseOpenIdConnectAuthentication(new OpenIdConnectOptions
            {
                AuthenticationScheme = "oidc",
                SignInScheme = "cookies",

                AutomaticAuthenticate = true,

                Authority = "http://amsoftidentityserver.azurewebsites.net//",
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
                Authority = "http://amsoftidentityserver.azurewebsites.net/",
                RequireHttpsMetadata = false,
                ApiName = "cloudoffice_api"
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute("default", "{controller=Home}/{action=Index}/{id?}");
            });

        }
    }
}
