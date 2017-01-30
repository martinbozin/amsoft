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

namespace AMSoft.IdentityServer.Configurator
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please select the action: ");
            var mainMenu = new CMenu(MenuType.Numbers)
            {
                new MenuEntry("Create/Update the clients", CreateOrUpdateTheClients),
                new MenuEntry("Create/Update api resources", CreateOrUpdateTheApiResources),
                new MenuEntry("Create/Update identity resources", CreateOrUpdateTheIdentityResources),
                new MenuEntry("Create/Update persisted grants", CreateOrUpdateThePersistedGrants),
            };

            mainMenu.PrintMenu('.', '\t');
            while (!mainMenu.ExecuteEntry(int.Parse(Console.ReadLine())))
                Console.WriteLine("Selection not allowed!");

            Console.ReadKey();
        }

        private static void CreateOrUpdateTheApiResources()
        {
            throw new NotImplementedException();
        }

        private static void CreateOrUpdateThePersistedGrants()
        {
            throw new NotImplementedException();
        }

        private static void CreateOrUpdateTheIdentityResources()
        {
            throw new NotImplementedException();
        }

        private static void CreateOrUpdateTheClients()
        {
            var options = new DbContextOptions<ConfigurationDbContext>();
            var storeOptions = new ConfigurationStoreOptions();

            var clientFiles = GetFiles("Clients");
            foreach (var clientFile in clientFiles)
            {
                var jToken = JToken.Parse(File.ReadAllText(clientFile.FullName));

                try
                {
                    dynamic dynObject = ConvertJTokenToObject(jToken);

                    using (var ctx = new ConfigurationDbContext(options, storeOptions))
                    {

                        string clientName = dynObject.ClientName.ToString();
                        var client = ctx.Clients.FirstOrDefault(x => x.ClientName == clientName);

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