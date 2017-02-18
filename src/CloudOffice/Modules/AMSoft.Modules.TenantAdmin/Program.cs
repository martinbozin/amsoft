﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace AMSoft.Modules.TenantAdmin
{
    public class Program
    {
        public static void Main(string[] args)
        {
 
            var host = new WebHostBuilder()
                .CaptureStartupErrors(true)
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();
            host.Run();
        }
    }
}
