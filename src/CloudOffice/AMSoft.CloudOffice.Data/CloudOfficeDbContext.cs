﻿using System.Threading.Tasks;
using AMSoft.CloudOffice.Data.Interfaces;
using AMSoft.CloudOffice.Domain.Core;
using Microsoft.EntityFrameworkCore;

namespace AMSoft.CloudOffice.Data
{
    public class CloudOfficeDbContext : DbContext, ICloudOfficeDbContext
    {
        public DbSet<AppTenant> AppTenants { get; set; }

        public DbSet<Module> Modules { get; set; }

        public DbSet<ModuleCategory> ModuleCategories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AppTenant>().ToTable("AppTenants", "dbo");
            modelBuilder.Entity<AppTenant>().HasKey("AppTenantId");
            modelBuilder.Entity<AppTenant>().Property("Name");
            modelBuilder.Entity<AppTenant>().Property("Address");
            modelBuilder.Entity<AppTenant>().Property("Phone");
            modelBuilder.Entity<AppTenant>().Property("Hostname");
            modelBuilder.Entity<AppTenant>().Property("Theme");
            modelBuilder.Entity<AppTenant>().Property("ConnectionString");
            modelBuilder.Entity<AppTenant>().Ignore(e => e.Hostnames);

            modelBuilder.Entity<ModuleCategory>().ToTable("ModuleCategories", "dbo");
            modelBuilder.Entity<ModuleCategory>().HasKey("ModuleCategoryId");
            modelBuilder.Entity<ModuleCategory>().Property("Name");

            modelBuilder.Entity<ModuleRoleDefault>().ToTable("ModuleRoleDefaults", "dbo");
            modelBuilder.Entity<ModuleRoleDefault>().HasKey("Id");
            modelBuilder.Entity<ModuleRoleDefault>().Property("Name");
            modelBuilder.Entity<ModuleRoleDefault>().Property("Description");

            modelBuilder.Entity<Module>().ToTable("Modules", "dbo");
            modelBuilder.Entity<Module>().HasKey("ModuleId");
            modelBuilder.Entity<Module>().Property("Name");
            modelBuilder.Entity<Module>().HasOne(p => p.AppTenant).WithMany(b => b.Modules);
            modelBuilder.Entity<Module>().HasOne(p => p.ModuleCategory).WithMany(b => b.Modules);
            modelBuilder.Entity<Module>().HasMany(p => p.ModuleRoleDefaults).WithOne(b => b.Module);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=amsoft.database.windows.net;Database=AMSoft.CloudOffice;User Id=amsoftadmin;Password=P@ssw0rd123!;");
        }

        public Task<int> SaveChangesAsync()
        {
            return base.SaveChangesAsync();
        }
    }
}