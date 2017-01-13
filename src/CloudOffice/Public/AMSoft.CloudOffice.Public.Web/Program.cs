using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace AMSoft.CloudOffice.Public.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseUrls("http://localhost:7001/")
                .UseContentRoot(Directory.GetCurrentDirectory())
                 .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
