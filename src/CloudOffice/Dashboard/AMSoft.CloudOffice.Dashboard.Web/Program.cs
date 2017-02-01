using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace AMSoft.CloudOffice.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseUrls("http://localhost:6001", "http://localhost:6002", "http://localhost:6003", "http://localhost:6004")
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
