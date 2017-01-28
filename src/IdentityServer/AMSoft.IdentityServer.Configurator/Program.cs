using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;
using System.Linq;
using AMSoft.IdentityServer.Configurator.Console_Menu;
using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Entities;
using IdentityServer4.EntityFramework.Options;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

class Program
{

    static void Main(string[] args)
    {
        Console.WriteLine("Please select the action: ");
        var mainMenu = new CMenu(MenuType.Numbers)
        {
            new MenuEntry("Create/Update the clients", CreateOrUpdateTheClients)
        };

        Console.WriteLine(mainMenu.PrintMenu('.', '\t'));
        while (!mainMenu.ExecuteEntry(int.Parse(Console.ReadLine())))
            Console.WriteLine("Selection not allowed!");

        Console.ReadKey();
    }

    private static void CreateOrUpdateTheClients()
    {
        var clients = JArray.Parse(File.ReadAllText(@"clients.json"));

        var options = new DbContextOptions<ConfigurationDbContext>();
        var storeOptions = new ConfigurationStoreOptions();

        foreach (JToken jsclient in clients)
        {
            try
            {
                dynamic dynObject = ConvertJTokenToObject(jsclient);


                using (var ctx = new ConfigurationDbContext(options, storeOptions))
                {
                    string clientName = dynObject.ClientName.ToString();
                    var client = ctx.Clients.FirstOrDefault(x=>x.ClientName == clientName);

                    ctx.Clients.Add(new Client()
                    {

                    });
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

        }
    }

    public static dynamic ConvertJTokenToObject(JToken token)
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