using System;
using System.Linq;
using AMSoft.CloudOffice.Domain.Core;
using AMSoft.CloudOffice.Domain.TenantModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace AMSoft.CloudOffice.Data
{
    public class AppTenantDbContext : DbContext
    {
        private readonly AppTenant _tenant;

        public AppTenantDbContext(AppTenant tenant)
        {
            if (tenant == null)
                throw new ArgumentNullException(nameof(tenant));

            this._tenant = tenant;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //TenantModule
            modelBuilder.Entity<TenantModule>().ToTable("TenantModules", "dbo");
            modelBuilder.Entity<TenantModule>().HasKey(x=>x.Id);
            modelBuilder.Entity<TenantModule>().Property(x => x.Id).HasColumnName("TenantModuleId");

            modelBuilder.Entity<TenantModule>().Property(x=>x.AppModuleId).HasColumnName("AppModuleId");
            modelBuilder.Entity<TenantModule>().Property(x=>x.Name).HasColumnName("AppModuleName");

            modelBuilder.Entity<TenantModule>().Property(x => x.ActivatedBy).HasColumnName("ActivatedBy");
            modelBuilder.Entity<TenantModule>().Property(x => x.ActivationDate).HasColumnName("ActivationDate");
            modelBuilder.Entity<TenantModule>().Property(x => x.ExpirationDate).HasColumnName("ActivationDate");

            modelBuilder.Entity<TenantModule>().Property(x => x.IsActive).HasColumnName("IsActive");
            modelBuilder.Entity<TenantModule>().Property(x => x.LicenseType).HasColumnName("LicenseType");

            modelBuilder.Entity<TenantModule>().Property(x => x.CreatedDate).HasColumnName("CreatedDate");
            modelBuilder.Entity<TenantModule>().Property(x => x.ModifiedDate).HasColumnName("ModifiedDate");

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_tenant.ConnectionString);
            base.OnConfiguring(optionsBuilder);
        }
    }

    /// <summary>
    /// This class is just for testing (Migrations) 
    /// Dont use in production code
    /// </summary>
    public class TestingPurposesAppTenantDbContextFactory : IDbContextFactory<AppTenantDbContext>
    {
        public AppTenantDbContext Create(DbContextFactoryOptions options)
        {
            AppTenant testTenant = null;
            using (var context = new CloudOfficeDbContext())
            {
                testTenant = context.AppTenants.First();
            }

            return new AppTenantDbContext(testTenant);
        }
    }
}
