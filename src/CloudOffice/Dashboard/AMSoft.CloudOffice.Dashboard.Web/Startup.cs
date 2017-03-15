using System;
using System.Collections.Generic;
using System.Globalization;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using AMSoft.Base.Multitenancy;
using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Data.Interfaces;
using AMSoft.CloudOffice.Domain.Core;
using AMSoft.CloudOffice.Infrastructure.Localization;
using AMSoft.CloudOffice.Infrastructure.Localization.DbStringLocalizer;
using AMSoft.CloudOffice.Infrastructure.Multitenancy;
using AMSoft.CloudOffice.Infrastructure.Mvc;
using AMSoft.CloudOffice.Web.Services;
using ExtCore.Infrastructure;
using ExtCore.WebApplication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
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
            services.AddScoped<IAppTenantDbContext, AppTenantDbContext>();
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
                .AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix)
                .AddDataAnnotationsLocalization()
                .AddRazorOptions(options =>
                {
                    foreach (var assembly in ExtensionManager.Assemblies)
                    {
                        var reference = MetadataReference.CreateFromFile(assembly.Location);
                        options.AdditionalCompilationReferences.Add(reference);
                    }
                });

            services.Configure<RazorViewEngineOptions>(options =>
            {
                foreach (var assembly in ExtensionManager.Assemblies)
                {
                    var embeddedFileProvider = new EmbeddedFileProvider(assembly, assembly.GetName().Name);
                    options.FileProviders.Add(embeddedFileProvider);
                }

                options.ViewLocationExpanders.Add(new ViewLocationExpander());
            });

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
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            //Add localization support
            var localizationOptions = app.ApplicationServices.GetService<IOptions<RequestLocalizationOptions>>();
            app.UseRequestLocalization(localizationOptions.Value);

            //app.UseThemes();

            app.UseStaticFiles();

            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Modules", "AMSoft.Modules.TenantAdmin", "wwwroot"))
            });

          

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
                 name: "Module_default",
                 template: "{Module:exists}/{controller=Home}/{action=Index}/{id?}",
                 defaults: null,
                 constraints: null,
                 dataTokens: null);

                routes.MapRoute(
                    name: "Module_api",
                    template: "{Module:exists}/api/{controller}/{action}",
                    defaults: null,
                    constraints: null,
                    dataTokens: null);

                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}",
                    defaults: null,
                    constraints: null,
                    dataTokens: new { Namespaces = new[] { "AMSoft.CloudOffice.Web.Controllers" } });

                routes.MapRoute(
                    name: "api",
                    template: "api/{controller}/{action}",
                    defaults: null,
                    constraints: null,
                    dataTokens: new { Namespaces = new[] { "AMSoft.CloudOffice.Web.Api" } });
            });

            //Configire extensions
            _extCoreStartup.Configure(app);
        }
    }
}
