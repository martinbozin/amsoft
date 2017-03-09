using System;
using System.Collections.Generic;
using System.Globalization;
using System.IdentityModel.Tokens.Jwt;
using AMSoft.Base.Multitenancy;
using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Data.Interfaces;
using AMSoft.CloudOffice.Domain.Core;
using AMSoft.CloudOffice.Infrastructure.Localization;
using AMSoft.CloudOffice.Infrastructure.Localization.DbStringLocalizer;
using AMSoft.CloudOffice.Infrastructure.Multitenancy;
using AMSoft.CloudOffice.Web.Services;
using ExtCore.WebApplication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace AMSoft.CloudOffice.Web
{
    public class Startup
    {
        private readonly ExtCoreStartup _extCoreStartup;
        protected IServiceProvider ServiceProvider;
        protected IConfigurationRoot ConfigurationRoot;
        protected IHostingEnvironment HostingEnvironment;
        public ILoggerFactory LoggerFactory;
        protected ILogger<Startup> Logger;

        public Startup(IHostingEnvironment env, IServiceProvider serviceProvider, ILoggerFactory loggerFactory)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables()
                .AddUserSecrets("aspnet-AMSoft.CloudOffice.Web-ce345b64-19cf-4972-b34f-d16f2e7976ed");

            ConfigurationRoot = builder.Build();
            HostingEnvironment = env;
            ServiceProvider = serviceProvider;
            LoggerFactory = loggerFactory;
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

            // Add Multitenancy service
            services.AddMultitenancy<AppTenant, CachingAppTenantResolver>();

            //Add localization services
            services.AddLocalizationSqlSchema("localization");
            services.AddSqlLocalization(options => options.UseSettings(true, false, false));
            services.AddDbContext<LocalizationModelContext>((provider, builder) =>
            {
                var sqlConnectionString = ConfigurationRoot["Data:CloudOfficeDbContext"];
                builder.UseSqlServer(sqlConnectionString, delegate (SqlServerDbContextOptionsBuilder optionsBuilder)
                {
                    optionsBuilder.MigrationsAssembly("AMSoft.CloudOffice.Infrastructure");
                });
            });
            services.AddScoped<LanguageActionFilter>();
            services.Configure<RequestLocalizationOptions>(options =>
            {
                var supportedCultures = new List<CultureInfo>
                        {
                            new CultureInfo("en-US"),
                            new CultureInfo("de-CH"),
                            new CultureInfo("fr-CH"),
                            new CultureInfo("it-CH")
                        };

                options.DefaultRequestCulture = new RequestCulture(culture: "en-US", uiCulture: "en-US");
                options.SupportedCultures = supportedCultures;
                options.SupportedUICultures = supportedCultures;

                //options.RequestCultureProviders.Insert(0, new CustomRequestCultureProvider(async context =>
                //{
                //    // My custom request culture logic
                //    return new ProviderCultureResult("en");
                //}));
            });

            // Add framework services.
            services.AddMvc()
                .AddViewLocalization()
                .AddDataAnnotationsLocalization();

            services.AddRouting(options =>
            {
                options.LowercaseUrls = true;
            });

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

            //Add localization support
            var localizationOptions = app.ApplicationServices.GetService<IOptions<RequestLocalizationOptions>>();
            app.UseRequestLocalization(localizationOptions.Value);

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
