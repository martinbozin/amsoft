﻿using AMSoft.CloudOffice.Domain;
using Microsoft.EntityFrameworkCore;

namespace AMSoft.CloudOffice.Data
{
    public class CloudOfficeDbContext : DbContext
    {
        //public CloudOfficeDbContext(DbContextOptions<CloudOfficeDbContext> options)
        //    : base(options)
        //{ }

        public DbSet<AppTenant> AppTenants { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AppTenant>().ToTable("AppTenants", "dbo");
            modelBuilder.Entity<AppTenant>().HasKey("AppTenantId");
            modelBuilder.Entity<AppTenant>().Property("Name");
            modelBuilder.Entity<AppTenant>().Property("Hostname");
            modelBuilder.Entity<AppTenant>().Ignore(e => e.Hostnames);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        { 
            optionsBuilder.UseSqlServer(@"Server=amsoft.database.windows.net;Database=AMSoft.CloudOffice;User Id=amsoftadmin;Password=P@ssw0rd123!;");
        }
    }
}