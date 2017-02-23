using System;
using System.IdentityModel.Tokens.Jwt;
using AMSoft.Base.Multitenancy;
using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Data.Interfaces;
using AMSoft.CloudOffice.Domain.Core;
using AMSoft.CloudOffice.Infrastructure.Multitenancy;
using AMSoft.CloudOffice.Web.Services;
using ExtCore.WebApplication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.UserSecrets;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

[assembly: UserSecretsId("aspnet-AMSoft.CloudOffice.Web-ce345b64-19cf-4972-b34f-d16f2e7976ed")]
namespace AMSoft.CloudOffice.Web
{
    public class Startup
    {
        private readonly ExtCoreStartup _extCoreStartup;
        protected IServiceProvider ServiceProvider;
        protected IConfigurationRoot ConfigurationRoot;
        protected IHostingEnvironment HostingEnvironment;
        protected ILogger<Startup> Logger;

        public Startup(IHostingEnvironment env, IServiceProvider serviceProvider, ILoggerFactory loggerFactory)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables()
                .AddUserSecrets();

            ConfigurationRoot = builder.Build();
            HostingEnvironment = env;
            ServiceProvider = serviceProvider;
            Logger = loggerFactory.CreateLogger<Startup>();

            //EXT CORE Extensions
            var assemblyProvider = new AssemblyProvider(serviceProvider);
            _extCoreStartup = new ExtCoreStartup(ConfigurationRoot, env, serviceProvider, assemblyProvider);
        }

        public virtual void ConfigureServices(IServiceCollection services)
        {
            //Add EF services
            services.AddEntityFramework().AddDbContext<AppTenantDbContext>();
            services.AddScoped<ICloudOfficeDbContext, CloudOfficeDbContext>();

            // Injection
            services.AddScoped<CurrentUserService>();

            // Add framework services.
            services.AddMvc();

            // Add Multitenancy service
            services.AddMultitenancy<AppTenant, CachingAppTenantResolver>();

            //Add Extensions services
            _extCoreStartup.ConfigureServices(services);
        }

        public virtual void Configure(IApplicationBuilder app)
        {
            if (HostingEnvironment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                //  app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();
            app.UseMultitenancy<AppTenant>();

            app.UsePerTenant<AppTenant>((ctx, builder) =>
            {
                builder.UseCookieAuthentication(new CookieAuthenticationOptions()
                {
                    LoginPath = new PathString("/account/login"),
                    AccessDeniedPath = new PathString("/account/forbidden"),
                    AutomaticAuthenticate = true,
                    AutomaticChallenge = true,
                    AuthenticationScheme = $"{ctx.Tenant.AppTenantId}.AspNet.Cookies",
                    CookieName = $"{ctx.Tenant.AppTenantId}.AspNet.Cookies"
                });
                
                JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();
                builder.UseOpenIdConnectAuthentication(new OpenIdConnectOptions
                {
                    AuthenticationScheme = "oidc",
                    SignInScheme = $"{ctx.Tenant.AppTenantId}.AspNet.Cookies",

                    AutomaticAuthenticate = true,

                    Authority = "http://amsoftidentityserver.azurewebsites.net/",
                    RequireHttpsMetadata = false,

                    ClientId = "AMSoft.CloudOffice.Web",
                    ClientSecret = "secret",

                    ResponseType = "code id_token",
                    Scope = { "cloudoffice_api", "offline_access" },

                    GetClaimsFromUserInfoEndpoint = true,
                    SaveTokens = true,
                    TokenValidationParameters = new TokenValidationParameters
                    {
                        NameClaimType = "name",
                        RoleClaimType = "role",
                        ValidateIssuer = false
                    }
                });

                builder.UseIdentityServerAuthentication(new IdentityServerAuthenticationOptions
                {
                    Authority = "http://amsoftidentityserver.azurewebsites.net/",
                    RequireHttpsMetadata = false,
                    ApiName = "cloudoffice_api",
                    NameClaimType = "name",
                    RoleClaimType = "role"
                });
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            //Configire extensions
            _extCoreStartup.Configure(app);
        }
    }
}
