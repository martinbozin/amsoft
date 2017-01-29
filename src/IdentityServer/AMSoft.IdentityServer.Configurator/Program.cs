using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Threading;
using AMSoft.IdentityServer.Configurator.Console_Menu;
using AMSoft.IdentityServer.Data.EntityFramework.DbContexts;
using AMSoft.IdentityServer.Data.EntityFramework.Entities;
using AMSoft.IdentityServer.Data.EntityFramework.Options;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;

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

            Console.WriteLine(mainMenu.PrintMenu('.', '\t'));
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
                var clientAsJson = JArray.Parse(File.ReadAllText(clientFile.FullName));
            
                foreach (JToken jToken in clientAsJson)
                {
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

                            client.ClientName = clientName;

                            ctx.SaveChanges();
                        }

                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex);
                    }

                }
            }
        }

        private static IEnumerable<FileInfo> GetFiles(string folder)
        {
            var dirInfo  =new DirectoryInfo(folder);
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
                (from childToken in token where childToken is JProperty select childToken as JProperty).ToList().ForEach(property => {
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