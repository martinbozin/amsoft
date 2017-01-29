using System;
using System.Net.Http;
using IdentityModel.Client;

namespace AMSoft.IdentityServer.Web.Tests
{
    class Program
    {
        static void Main(string[] args)
        {
            // discover endpoints from metadata
            var disco = DiscoveryClient.GetAsync("http://localhost:6010/").Result;

            // request token
            var tokenClient = new TokenClient(disco.TokenEndpoint, "hybrid", "secret");
            var tokenResponse = tokenClient.RequestClientCredentialsAsync("cloudoffice_api").Result;


            if (tokenResponse.IsError)
            {
                Console.WriteLine(tokenResponse.Error);
                return;
            }


            /////////////////////////////////////
            // Call the API
            var client = new HttpClient();
            client.SetBearerToken(tokenResponse.AccessToken);

            var response = client.GetAsync("http://localhost:7001/Home/About").Result;
            if (!response.IsSuccessStatusCode)
            {
                Console.WriteLine(response.StatusCode);
            }
            else
            {
                var content = response.Content.ReadAsStringAsync().Result;
                Console.WriteLine(content);
            }


            ///////////////////////////////////////
            //// Requesting a token using the password grant

            //// request token
            //tokenClient = new TokenClient(disco.TokenEndpoint, "ro.client", "secret");
            //tokenResponse =  tokenClient.RequestResourceOwnerPasswordAsync("alice", "password", "api1").Result;

            //if (tokenResponse.IsError)
            //{
            //    Console.WriteLine(tokenResponse.Error);
            //    return;
            //}

            //Console.WriteLine(tokenResponse.Json);
            //Console.WriteLine("\n\n");

            //Console.WriteLine(tokenResponse.Json);
        }
    }
}