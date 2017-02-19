using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using AMSoft.CloudOffice.Domain.Core;

namespace AMSoft.CloudOffice.Data
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //var builder = new ConfigurationBuilder()
            //  .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
            //;
            //var configurationRoot = builder.Build();


            try
            {
                //migrate main database
                using (var cloudOfficeDbContext = new CloudOfficeDbContext())
                {
                    //  cloudOfficeDbContext.Database.EnsureCreated();
                    cloudOfficeDbContext.Database.Migrate();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }


            IEnumerable<AppTenant> tenants;
            using (var cloudOfficeDbContext = new CloudOfficeDbContext())
            {
                tenants = cloudOfficeDbContext.AppTenants.ToList();
            }

            try
            {
                //Migrate all Tenant databases
                foreach (var appTenant in tenants)
                {
                    using (var tenantContext = new AppTenantDbContext(appTenant))
                    {
                        //tenantContext.Database.EnsureCreated();
                        tenantContext.Database.Migrate();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                throw;
            }

            Console.WriteLine("Migration finished");
        }
    }
}
