using IdentityServer4.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Security.Claims;
using IdentityServer4;
using IdentityServer4.Test;
using IdentityServer4.Validation;
using System.Reflection;
using AMSoft.IdentityServer.Data.EntityFramework.Extensions;
using AMSoft.IdentityServer.Web.Controllers;
using Microsoft.EntityFrameworkCore;

namespace AMSoft.IdentityServer.Web
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(LogLevel.Trace);
            app.UseDeveloperExceptionPage();

            app.UseIdentityServer();

            //// cookie middleware for temporarily storing the outcome of the external authentication
            //app.UseCookieAuthentication(new CookieAuthenticationOptions
            //{
            //    AuthenticationScheme = IdentityServerConstants.ExternalCookieAuthenticationScheme,
            //    AutomaticAuthenticate = false,
            //    AutomaticChallenge = false
            //});

            //// middleware for google authentication
            //app.UseGoogleAuthentication(new GoogleOptions
            //{
            //    AuthenticationScheme = "Google",
            //    SignInScheme = IdentityServerConstants.ExternalCookieAuthenticationScheme,
            //    ClientId = "708996912208-9m4dkjb5hscn7cjrn5u0r4tbgkbj1fko.apps.googleusercontent.com",
            //    ClientSecret = "wdfPY6t8H8cecgjlxud__4Gh"
            //});

            //// middleware for external openid connect authentication
            //app.UseOpenIdConnectAuthentication(new OpenIdConnectOptions
            //{
            //    SignInScheme = IdentityServerConstants.ExternalCookieAuthenticationScheme,
            //    SignOutScheme = IdentityServerConstants.SignoutScheme,
            //    DisplayName = "OpenID Connect",
            //    Authority = "https://demo.identityserver.io/",
            //    ClientId = "implicit",
            //    TokenValidationParameters = new TokenValidationParameters
            //    {
            //        NameClaimType = "name",
            //        RoleClaimType = "role"
            //    }
            //});

            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            const string connectionString = @"Data Source=amsoft.database.windows.net;database=AMSoft.IdentityServer;user id=amsoftadmin;password=P@ssw0rd123!";

            services.AddMvc();

            var migrationsAssembly = typeof(Startup).GetTypeInfo().Assembly.GetName().Name;

            services.AddIdentityServer()
                //.AddSecretParser<ClientAssertionSecretParser>()
                //.AddSecretValidator<PrivateKeyJwtSecretValidator>()
                .AddConfigurationStore(builder =>
                    builder.UseSqlServer(connectionString)
                )
                .AddOperationalStore(builder =>
                    builder.UseSqlServer(connectionString)
                )
                .AddTemporarySigningCredential()
                .AddTestUsers(TestUsers.Users)
                ;


          
            ////  configure identity server with in-memory stores, keys, clients and scopes
            //services.AddIdentityServer()
            //    .AddTemporarySigningCredential()
            //    .AddInMemoryIdentityResources(Config.GetIdentityResources())
            //    .AddInMemoryApiResources(Config.GetApiResources())
            //    .AddInMemoryClients(Config.GetClients())
            //    .AddTestUsers(Config.GetUsers());
        }
    }

    //public class Config
    //{
    //    public static IEnumerable<IdentityResource> GetIdentityResources()
    //    {
    //        return new List<IdentityResource>
    //        {
    //            new IdentityResources.OpenId(),
    //            new IdentityResources.Profile(),
    //        };
    //    }

    //    public static IEnumerable<ApiResource> GetApiResources()
    //    {
    //        return new List<ApiResource>
    //        {
    //            new ApiResource("cloudoffice_api", "CloudOffice API")
    //        };
    //    }

    //    public static IEnumerable<Client> GetClients()
    //    {
    //        return new List<Client>
    //        {
    //            ////Client Credentials
    //            //new Client
    //            //{
    //            //    ClientId = "client",

    //            //    // no interactive user, use the clientid/secret for authentication
    //            //    AllowedGrantTypes = GrantTypes.ClientCredentials,

    //            //    // secret for authentication
    //            //    ClientSecrets =
    //            //    {
    //            //        new Secret("secret".Sha256())
    //            //    },

    //            //    // scopes that client has access to
    //            //    AllowedScopes = {"cloudoffice_api"}
    //            //},
    //            //// resource owner password grant client
    //            //new Client
    //            //{
    //            //    ClientId = "ro.client",
    //            //    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
    //            //    ClientSecrets =
    //            //    {
    //            //        new Secret("secret".Sha256())
    //            //    },
    //            //    AllowedScopes = {"cloudoffice_api"}
    //            //},
    //            //// OpenID Connect implicit flow client (MVC)
    //            //new Client
    //            //{
    //            //    ClientId = "mvc",
    //            //    ClientName = "MVC Client",
    //            //    AllowedGrantTypes = GrantTypes.Implicit,

    //            //    // where to redirect to after login
    //            //    RedirectUris = {"http://localhost:7001"},

    //            //    // where to redirect to after logout
    //            //    PostLogoutRedirectUris = {"http://localhost:7001"},

    //            //    AllowedScopes = new List<string>
    //            //    {
    //            //        IdentityServerConstants.StandardScopes.OpenId,
    //            //        IdentityServerConstants.StandardScopes.Profile
    //            //    }
    //            //},
    //            //Hybrid flow
    //            new Client
    //            {
    //                ClientId = "AMSoft.CloudOffice.Public.Web",
    //                ClientName = "AMSoft.CloudOffice.Public.Web",
    //                AllowedGrantTypes = GrantTypes.HybridAndClientCredentials,
    //                ClientSecrets =
    //                {
    //                    new Secret("secret".Sha256())
    //                },
    //                RequireConsent= false,

    //                // where to redirect to after login
    //                RedirectUris = { "http://localhost:7001/signin-oidc" },

    //                // where to redirect to after logout
    //                PostLogoutRedirectUris = { "http://localhost:7001" },

    //                AllowedScopes =
    //                {
    //                    IdentityServerConstants.StandardScopes.OpenId,
    //                    IdentityServerConstants.StandardScopes.Profile,
    //                    IdentityServerConstants.StandardScopes.OfflineAccess,
    //                    "cloudoffice_api"
    //                },
    //                AllowOfflineAccess = true
    //            }
    //        };
    //    }

    //    public static List<TestUser> GetUsers()
    //    {
    //        return new List<TestUser>
    //        {
    //            new TestUser
    //            {
    //                SubjectId = "1",
    //                Username = "alice",
    //                Password = "password",

    //                Claims = new[]
    //                {
    //                    new Claim("name", "Alice"),
    //                    new Claim("website", "https://alice.com")
    //                }
    //            },
    //            new TestUser
    //            {
    //                SubjectId = "2",
    //                Username = "bob",
    //                Password = "password",

    //                Claims = new[]
    //                {
    //                    new Claim("name", "Bob"),
    //                    new Claim("website", "https://bob.com")
    //                }
    //            }
    //        };
    //    }
    //}
}