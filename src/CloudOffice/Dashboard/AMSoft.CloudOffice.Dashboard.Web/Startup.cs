using System;
using System.IdentityModel.Tokens.Jwt;
using AMSoft.Base.Multitenancy;
using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Data.Interfaces;
using AMSoft.CloudOffice.Domain.Core;
using AMSoft.CloudOffice.Web.Multitenancy;
using AMSoft.CloudOffice.Web.Services;
using ExtCore.WebApplication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

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
                .AddEnvironmentVariables();

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

            //Configire extensions
            _extCoreStartup.Configure(app);
        }
    }
}
