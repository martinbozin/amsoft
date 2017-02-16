using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;
using System.Linq;
using AMSoft.IdentityServer.Configurator.Console_Menu;
using AMSoft.IdentityServer.Data.EntityFramework.DbContexts;
using AMSoft.IdentityServer.Data.EntityFramework.Entities;
using AMSoft.IdentityServer.Data.EntityFramework.Options;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using AMSoft.Base.Extensions;
using IdentityServer4.Models;
using Client = AMSoft.IdentityServer.Data.EntityFramework.Entities.Client;

namespace AMSoft.IdentityServer.Configurator
{
    class Program
    {
        static void Main(string[] args)
        {
            var mainMenu = new CMenu(MenuType.Numbers)
            {
                new MenuEntry("Create/Update the clients", CreateOrUpdateTheClients),
                new MenuEntry("Create/Update api resources", CreateOrUpdateTheApiResources),
                new MenuEntry("Create/Update identity resources", CreateOrUpdateTheIdentityResources),
                new MenuEntry("Create/Update persisted grants", CreateOrUpdateThePersistedGrants),
            };
            
            var exit = false;
            while (!exit)
            {
                Console.WriteLine("Please select your action: ");
                mainMenu.PrintMenu('.', '\t');
                Console.WriteLine("Type quit to exit: ");

                var input = Console.ReadLine();

                int menuIndex;
                if (!int.TryParse(input, out menuIndex))
                {
                    exit = input.Contains("quit");
                }

                if (menuIndex > 0 && !mainMenu.ExecuteEntry(menuIndex))
                {
                    Console.WriteLine("Selection not allowed!");
                }
            }

            Console.ReadKey();
        }

        private static void CreateOrUpdateTheApiResources()
        {
            var options = new DbContextOptions<ConfigurationDbContext>();
            var storeOptions = new ConfigurationStoreOptions();

            var files = GetFiles("Database/ApiResources");
            foreach (var file in files)
            {
                var jToken = JToken.Parse(File.ReadAllText(file.FullName));

                try
                {
                    dynamic dynObject = ConvertJTokenToObject(jToken);

                    using (var ctx = new ConfigurationDbContext(options, storeOptions))
                    {
                        string apiResourceName = dynObject.Name.ToString();
                        var apiResource = ctx.ApiResources
                                          .Include(x => x.Secrets)
                                          .Include(x => x.Scopes)
                                          .Include(x => x.UserClaims)
                                          .FirstOrDefault(x => x.Name == apiResourceName);

                        if (apiResource == null)
                        {
                            apiResource = new Data.EntityFramework.Entities.ApiResource();
                            ctx.ApiResources.Add(apiResource);
                        }

                        apiResource.Name = dynObject.Name.ToString();
                        apiResource.DisplayName = dynObject.DisplayName.ToString();
                        apiResource.Description = dynObject.Description.ToString();
                        apiResource.Enabled = StringExtensions.ToBoolean(dynObject.Enabled.ToString());

                        #region Secrets
                        if (apiResource.Secrets != null)
                        {
                            apiResource.Secrets.RemoveAll(x => true);
                        }
                        else
                            apiResource.Secrets = new List<ApiSecret>();

                        if (dynObject.Secrets != null)
                        {
                            foreach (var apiSecret in dynObject.Secrets)
                            {
                                DateTime? expiration = null;

                                if (!string.IsNullOrEmpty(apiSecret.Expiration))
                                    expiration = DateTime.Parse(apiSecret.Expiration.ToString());

                                apiResource.Secrets.Add(new ApiSecret()
                                {
                                    ApiResource = apiResource,
                                    Description = apiSecret.Description.ToString(),
                                    Expiration = expiration,
                                    Type = apiSecret.Type,
                                    Value = HashExtensions.Sha256(apiSecret.Value)
                                });
                            }
                        }
                        #endregion

                        #region Scopes
                        if (apiResource.Scopes != null)
                        {
                            apiResource.Scopes.RemoveAll(x => true);
                        }
                        else
                            apiResource.Scopes = new List<ApiScope>();

                        apiResource.Scopes.Add(new ApiScope()
                        {
                            ApiResource = apiResource,
                            Name = apiResource.Name,
                            Required = false,
                            DisplayName = apiResource.DisplayName
                        });

                        if (dynObject.Scopes != null)
                        {
                            foreach (var apiScope in dynObject.Scopes)
                            {
                                var userClaims = new List<ApiScopeClaim>();
                                foreach (var userClaim in apiScope.UserClaims)
                                {
                                    userClaims.Add(new ApiScopeClaim()
                                    {
                                        ApiScope = apiScope,
                                        Type = userClaim
                                    });
                                }

                                apiResource.Scopes.Add(new ApiScope()
                                {
                                    ApiResource = apiResource,
                                    Name = apiScope.Name.ToString(),
                                    Description = apiScope.Description.ToString(),
                                    DisplayName = apiScope.DisplayName.ToString(),
                                    Emphasize = StringExtensions.ToBoolean(apiScope.Emphasize.ToString()),
                                    Required = StringExtensions.ToBoolean(apiScope.Required.ToString()),
                                    ShowInDiscoveryDocument = StringExtensions.ToBoolean(apiScope.ShowInDiscoveryDocument.ToString()),
                                    UserClaims = userClaims
                                });
                            }
                        }
                        #endregion

                        #region UserClaims
                        if (apiResource.UserClaims != null)
                        {
                            apiResource.UserClaims.RemoveAll(x => true);
                        }
                        else
                            apiResource.UserClaims = new List<ApiResourceClaim>();

                        if (dynObject.UserClaims != null)
                        {
                            foreach (var apiResourceClaim in dynObject.UserClaims)
                            {
                                apiResource.UserClaims.Add(new ApiResourceClaim()
                                {
                                    ApiResource = apiResource,
                                    Type = apiResourceClaim
                                });
                            }
                        }
                        #endregion

                        ctx.SaveChanges();
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                }
            }
        }

        private static void CreateOrUpdateThePersistedGrants()
        {
            var options = new DbContextOptions<PersistedGrantDbContext>();
            var storeOptions = new OperationalStoreOptions();

            var files = GetFiles("Database/PersistedGrants");
            foreach (var file in files)
            {
                var jToken = JToken.Parse(File.ReadAllText(file.FullName));

                try
                {
                    dynamic dynObject = ConvertJTokenToObject(jToken);

                    using (var ctx = new PersistedGrantDbContext(options, storeOptions))
                    {
                        string persistedGrantKey = dynObject.Key.ToString();
                        var persistedGrant = ctx.PersistedGrants
                                          .FirstOrDefault(x => x.Key == persistedGrantKey);

                        if (persistedGrant == null)
                        {
                            persistedGrant = new Data.EntityFramework.Entities.PersistedGrant();
                            ctx.PersistedGrants.Add(persistedGrant);
                        }

                        persistedGrant.Key = dynObject.Name.ToString();

                        persistedGrant.ClientId = dynObject.DisplayName.ToString();
                        persistedGrant.SubjectId = dynObject.SubjectId.ToString();
                        persistedGrant.Type = dynObject.Type.ToString();
                        persistedGrant.Data = dynObject.Data.ToString();

                        persistedGrant.CreationTime = DateTime.Now;
                        persistedGrant.Expiration = StringExtensions.ToDateTimeSafe(dynObject.Expiration.ToString());

                        ctx.SaveChanges();
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                }
            }
        }

        private static void CreateOrUpdateTheIdentityResources()
        {
            var options = new DbContextOptions<ConfigurationDbContext>();
            var storeOptions = new ConfigurationStoreOptions();

            var files = GetFiles("Database/IdentityResources");

            foreach (var file in files)
            {
                var jToken = JToken.Parse(File.ReadAllText(file.FullName));

                try
                {
                    dynamic dynObject = ConvertJTokenToObject(jToken);

                    using (var ctx = new ConfigurationDbContext(options, storeOptions))
                    {
                        string identityResourceName = dynObject.Name.ToString();
                        var identityResource = ctx.IdentityResources
                                          .Include(x => x.UserClaims)
                                          .FirstOrDefault(x => x.Name == identityResourceName);

                        if (identityResource == null)
                        {
                            identityResource = new Data.EntityFramework.Entities.IdentityResource();
                            ctx.IdentityResources.Add(identityResource);
                        }

                        identityResource.Name = dynObject.Name.ToString();
                        identityResource.DisplayName = dynObject.DisplayName.ToString();
                        identityResource.Description = dynObject.Description.ToString();
                        identityResource.Enabled = StringExtensions.ToBoolean(dynObject.Enabled.ToString());
                        identityResource.Emphasize = StringExtensions.ToBoolean(dynObject.Emphasize.ToString());
                        identityResource.Required = StringExtensions.ToBoolean(dynObject.Required.ToString());
                        identityResource.ShowInDiscoveryDocument = StringExtensions.ToBoolean(dynObject.ShowInDiscoveryDocument.ToString());

                        #region UserClaims
                        if (identityResource.UserClaims != null)
                        {
                            identityResource.UserClaims.RemoveAll(x => true);
                        }
                        else
                            identityResource.UserClaims = new List<IdentityClaim>();

                        if (dynObject.UserClaims != null)
                        {
                            foreach (var userClaim in dynObject.UserClaims)
                            {
                                identityResource.UserClaims.Add(new IdentityClaim()
                                {
                                    IdentityResource = identityResource,
                                    Type = userClaim
                                });
                            }
                        }
                        #endregion

                        ctx.SaveChanges();
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                }
            }
        }

        private static void CreateOrUpdateTheClients()
        {
            var options = new DbContextOptions<ConfigurationDbContext>();
            var storeOptions = new ConfigurationStoreOptions();

            var clientFiles = GetFiles("Database/Clients");

            foreach (var clientFile in clientFiles)
            {
                var jToken = JToken.Parse(File.ReadAllText(clientFile.FullName));

                try
                {
                    dynamic dynObject = ConvertJTokenToObject(jToken);

                    using (var ctx = new ConfigurationDbContext(options, storeOptions))
                    {

                        string clientName = dynObject.ClientName.ToString();
                        var client = ctx.Clients
                                            .Include(x => x.Claims)
                                            .Include(x => x.AllowedCorsOrigins)
                                            .Include(x => x.AllowedGrantTypes)
                                            .Include(x => x.IdentityProviderRestrictions)
                                            .Include(x => x.AllowedScopes)
                                            .Include(x => x.ClientSecrets)
                                            .Include(x => x.RedirectUris)
                                            .Include(x => x.PostLogoutRedirectUris)
                                            .FirstOrDefault(x => x.ClientName == clientName);

                        if (client == null)
                        {
                            client = new Client();
                            ctx.Clients.Add(client);
                        }

                        client.AbsoluteRefreshTokenLifetime = StringExtensions.ToInt32(dynObject.AbsoluteRefreshTokenLifetime.ToString());
                        client.AccessTokenLifetime = StringExtensions.ToInt32(dynObject.AccessTokenLifetime.ToString());
                        client.AccessTokenType = StringExtensions.ToInt32(dynObject.AccessTokenType.ToString());
                        client.AllowAccessTokensViaBrowser = StringExtensions.ToBoolean(dynObject.AllowAccessTokensViaBrowser.ToString());
                        client.AllowOfflineAccess = StringExtensions.ToBoolean(dynObject.AllowOfflineAccess.ToString());
                        client.AllowPlainTextPkce = StringExtensions.ToBoolean(dynObject.AllowPlainTextPkce.ToString());
                        client.AllowRememberConsent = StringExtensions.ToBoolean(dynObject.AllowRememberConsent.ToString());
                        client.AlwaysIncludeUserClaimsInIdToken = StringExtensions.ToBoolean(dynObject.AlwaysIncludeUserClaimsInIdToken.ToString());
                        client.AlwaysSendClientClaims = StringExtensions.ToBoolean(dynObject.AlwaysSendClientClaims.ToString());
                        client.AuthorizationCodeLifetime = StringExtensions.ToInt32(dynObject.AuthorizationCodeLifetime.ToString());
                        client.ClientId = dynObject.ClientId.ToString();
                        client.ClientName = dynObject.ClientName.ToString();
                        client.ClientUri = dynObject.ClientUri.ToString();
                        client.EnableLocalLogin = StringExtensions.ToBoolean(dynObject.EnableLocalLogin.ToString());
                        client.Enabled = StringExtensions.ToBoolean(dynObject.Enabled.ToString());
                        client.IdentityTokenLifetime = StringExtensions.ToInt32(dynObject.IdentityTokenLifetime.ToString());
                        client.IncludeJwtId = StringExtensions.ToBoolean(dynObject.IncludeJwtId.ToString());
                        client.LogoUri = dynObject.LogoUri.ToString();
                        client.LogoutSessionRequired = StringExtensions.ToBoolean(dynObject.LogoutSessionRequired.ToString());
                        client.LogoutUri = dynObject.LogoutUri.ToString();
                        client.PrefixClientClaims = StringExtensions.ToBoolean(dynObject.PrefixClientClaims.ToString());
                        client.ProtocolType = dynObject.ProtocolType.ToString();
                        client.RefreshTokenExpiration = StringExtensions.ToInt32(dynObject.RefreshTokenExpiration.ToString());
                        client.RefreshTokenUsage = StringExtensions.ToInt32(dynObject.RefreshTokenUsage.ToString());
                        client.RequireClientSecret = StringExtensions.ToBoolean(dynObject.RequireClientSecret.ToString());
                        client.RequireConsent = StringExtensions.ToBoolean(dynObject.RequireConsent.ToString());
                        client.RequirePkce = StringExtensions.ToBoolean(dynObject.RequirePkce.ToString());
                        client.SlidingRefreshTokenLifetime = StringExtensions.ToInt32(dynObject.SlidingRefreshTokenLifetime.ToString());
                        client.UpdateAccessTokenClaimsOnRefresh = StringExtensions.ToBoolean(dynObject.UpdateAccessTokenClaimsOnRefresh.ToString());

                        #region ClientClaims

                        if (client.Claims != null)
                        {
                            client.Claims.RemoveAll(x => true);
                        }
                        else
                            client.Claims = new List<ClientClaim>();

                        if (dynObject.ClientClaim != null)
                        {
                            foreach (var claim in dynObject.ClientClaim)
                            {
                                client.Claims.Add(new ClientClaim()
                                {
                                    Client = client,
                                    Type = claim.Type,
                                    Value = claim.Value
                                });
                            }
                        }
                        #endregion

                        #region AllowedCorsOrigins

                        if (client.AllowedCorsOrigins != null)
                        {
                            client.AllowedCorsOrigins.RemoveAll(x => true);
                        }
                        else
                            client.AllowedCorsOrigins = new List<ClientCorsOrigin>();

                        if (dynObject.ClientCorsOrigin != null)
                        {
                            foreach (var allowedCorsOrigin in dynObject.ClientCorsOrigin)
                            {
                                client.AllowedCorsOrigins.Add(new ClientCorsOrigin()
                                {
                                    Client = client,
                                    Origin = allowedCorsOrigin
                                });
                            }
                        }
                        #endregion

                        #region ClientGrantTypes

                        if (client.AllowedGrantTypes != null)
                            client.AllowedGrantTypes.RemoveAll(x => true);
                        else
                            client.AllowedGrantTypes = new List<ClientGrantType>();

                        if (dynObject.AllowedGrantTypes != null)
                        {
                            foreach (var allowedGrantType in dynObject.AllowedGrantTypes)
                            {
                                client.AllowedGrantTypes.Add(new ClientGrantType()
                                {
                                    Client = client,
                                    GrantType = allowedGrantType
                                });
                            }
                        }
                        #endregion

                        #region ClientIdPRestriction

                        if (client.IdentityProviderRestrictions != null)
                        {
                            client.IdentityProviderRestrictions.RemoveAll(x => true);
                        }
                        else
                            client.IdentityProviderRestrictions = new List<ClientIdPRestriction>();

                        if (dynObject.IdentityProviderRestrictions != null)
                        {
                            foreach (var provider in dynObject.IdentityProviderRestrictions)
                            {
                                client.IdentityProviderRestrictions.Add(new ClientIdPRestriction()
                                {
                                    Client = client,
                                    Provider = provider
                                });
                            }
                        }
                        #endregion

                        #region PostLogout RedirectUris

                        if (client.PostLogoutRedirectUris != null)
                        {
                            client.PostLogoutRedirectUris.RemoveAll(x => true);
                        }
                        else
                            client.PostLogoutRedirectUris = new List<ClientPostLogoutRedirectUri>();

                        if (dynObject.PostLogoutRedirectUris != null)
                        {
                            foreach (var redirectUri in dynObject.PostLogoutRedirectUris)
                            {
                                client.PostLogoutRedirectUris.Add(new ClientPostLogoutRedirectUri()
                                {
                                    Client = client,
                                    PostLogoutRedirectUri = redirectUri
                                });
                            }
                        }
                        #endregion

                        #region Redirect Uris

                        if (client.RedirectUris != null)
                        {
                            client.RedirectUris.RemoveAll(x => true);
                        }
                        else
                            client.RedirectUris = new List<ClientRedirectUri>();

                        if (dynObject.RedirectUris != null)
                        {
                            foreach (var redirectUri in dynObject.RedirectUris)
                            {
                                client.RedirectUris.Add(new ClientRedirectUri()
                                {
                                    Client = client,
                                    RedirectUri = redirectUri
                                });
                            }
                        }
                        #endregion

                        #region Allowed scopes

                        if (client.AllowedScopes != null)
                        {
                            client.AllowedScopes.RemoveAll(x => true);
                        }
                        else
                            client.AllowedScopes = new List<ClientScope>();

                        if (dynObject.AllowedScopes != null)
                        {
                            foreach (var allowedScope in dynObject.AllowedScopes)
                            {
                                client.AllowedScopes.Add(new ClientScope()
                                {
                                    Client = client,
                                    Scope = allowedScope
                                });
                            }
                        }

                        #endregion

                        #region Client Secrets

                        if (client.ClientSecrets != null)
                            client.ClientSecrets.RemoveAll(x => true);
                        else
                            client.ClientSecrets = new List<ClientSecret>();

                        if (dynObject.ClientSecrets != null)
                        {
                            foreach (var clientSecret in dynObject.ClientSecrets)
                            {
                                DateTime? expiration = null;

                                if (!string.IsNullOrEmpty(clientSecret.Expiration))
                                    expiration = DateTime.Parse(clientSecret.Expiration.ToString());

                                client.ClientSecrets.Add(new ClientSecret()
                                {
                                    Client = client,
                                    Value = HashExtensions.Sha256(clientSecret.Value.ToString()),
                                    Type = clientSecret.Type.ToString(),
                                    Description = clientSecret.Description.ToString(),
                                    Expiration = expiration
                                });
                            }
                        }

                        #endregion

                        ctx.SaveChanges();
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                }
            }
        }

        private static IEnumerable<FileInfo> GetFiles(string folder)
        {
            var dirInfo = new DirectoryInfo(folder);
            return dirInfo.GetFiles("*.json");
        }

        private static dynamic ConvertJTokenToObject(JToken token)
        {
            var value = token as JValue;
            if (value != null)
            {
                return value.Value;
            }

            var o = token as JObject;
            if (o != null)
            {
                var expando = new ExpandoObject();
                (from childToken in token where childToken is JProperty select childToken as JProperty).ToList().ForEach(property =>
                {
                    ((IDictionary<string, object>)expando).Add(property.Name, ConvertJTokenToObject(property.Value));
                });
                return expando;
            }

            var items = token as JArray;
            if (items != null)
            {
                object[] array = new object[items.Count];
                int index = 0;
                foreach (JToken arrayItem in items)
                {
                    array[index] = ConvertJTokenToObject(arrayItem);
                    index++;
                }
                return array;
            }

            throw new ArgumentException(string.Format("Unknown token type '{0}'", token.GetType()), nameof(token));
        }
    }
}