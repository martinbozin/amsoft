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
            modelBuilder.Entity<TenantModule>().HasKey(x => x.Id);
            modelBuilder.Entity<TenantModule>().Property(x => x.Id).HasColumnName("TenantModuleId");

            modelBuilder.Entity<TenantModule>().Property(x => x.AppModuleId).HasColumnName("AppModuleId");
            modelBuilder.Entity<TenantModule>().Property(x => x.Name).HasColumnName("AppModuleName");

            modelBuilder.Entity<TenantModule>().Property(x => x.ActivatedBy).HasColumnName("ActivatedBy");
            modelBuilder.Entity<TenantModule>().Property(x => x.ActivationDate).HasColumnName("ActivationDate");
            modelBuilder.Entity<TenantModule>().Property(x => x.ExpirationDate).HasColumnName("ActivationDate");

            modelBuilder.Entity<TenantModule>().Property(x => x.IsActive).HasColumnName("IsActive");
            modelBuilder.Entity<TenantModule>().Property(x => x.LicenseType).HasColumnName("LicenseType");

            modelBuilder.Entity<TenantModule>().Property(x => x.CreatedDate).HasColumnName("CreatedDate");
            modelBuilder.Entity<TenantModule>().Property(x => x.ModifiedDate).HasColumnName("ModifiedDate");
            modelBuilder.Entity<TenantModule>().HasMany(x => x.AllowedModulePermissions).WithOne(x=>x.TenantModule);
            modelBuilder.Entity<TenantModule>().HasMany(x => x.TenantModuleRoles).WithOne(x=>x.TenantModule);

            //TenantUser
            modelBuilder.Entity<TenantUser>().ToTable("TenantUsers", "dbo");
            modelBuilder.Entity<TenantUser>().HasKey(x => x.Id);
            modelBuilder.Entity<TenantUser>().Property(x => x.Id).HasColumnName("TenantUserId");

            modelBuilder.Entity<TenantUser>().Property(x => x.FirstName).HasColumnName("FirstName");
            modelBuilder.Entity<TenantUser>().Property(x => x.LastName).HasColumnName("LastName");
            modelBuilder.Entity<TenantUser>().Property(x => x.Email).HasColumnName("Email");
            modelBuilder.Entity<TenantUser>().Property(x => x.FullName).HasColumnName("FullName");
            modelBuilder.Entity<TenantUser>().Property(x => x.IsActive).HasColumnName("IsActive");

            modelBuilder.Entity<TenantUser>().Property(x => x.CreatedDate).HasColumnName("CreatedDate");
            modelBuilder.Entity<TenantUser>().Property(x => x.CreatedBy).HasColumnName("CreatedBy");
            modelBuilder.Entity<TenantUser>().Property(x => x.ModifiedDate).HasColumnName("ModifiedDate");
            modelBuilder.Entity<TenantUser>().Property(x => x.ModifiedBy).HasColumnName("ModifiedBy");
            modelBuilder.Entity<TenantUser>().HasMany(x => x.TenantUser2TenantModuleRoles).WithOne(x => x.TenantUser);
           
            //TenantModuleUserRole
            modelBuilder.Entity<TenantUser2TenantModuleRole>().ToTable("TenantUser2TenantModuleRole", "dbo");
            modelBuilder.Entity<TenantUser2TenantModuleRole>().HasKey(t => new { t.TenantUserId, t.TenantModuleRoleId });
            modelBuilder.Entity<TenantUser2TenantModuleRole>()
                                                      .HasOne(pt => pt.TenantUser)
                                                      .WithMany(p => p.TenantUser2TenantModuleRoles)
                                                      .HasForeignKey(pt => pt.TenantUserId);

            modelBuilder.Entity<TenantUser2TenantModuleRole>()
                                                     .HasOne(pt => pt.TenantModuleRole)
                                                     .WithMany(t => t.TenantUser2TenantModuleRoles)
                                                     .HasForeignKey(pt => pt.TenantModuleRoleId);

            //TenantModuleRole
            modelBuilder.Entity<TenantModuleRole>().ToTable("TenantModuleRoles", "dbo");
            modelBuilder.Entity<TenantModuleRole>().HasKey(x => x.Id);
            modelBuilder.Entity<TenantModuleRole>().Property(x => x.Id).HasColumnName("TenantModuleRoleId");

            modelBuilder.Entity<TenantModuleRole>().Property(x => x.Name).HasColumnName("Name");
            modelBuilder.Entity<TenantModuleRole>().Property(x => x.Description).HasColumnName("Description");

            modelBuilder.Entity<TenantModuleRole>().Property(x => x.CreatedDate).HasColumnName("CreatedDate");
            modelBuilder.Entity<TenantModuleRole>().Property(x => x.CreatedBy).HasColumnName("CreatedBy");
            modelBuilder.Entity<TenantModuleRole>().Property(x => x.ModifiedDate).HasColumnName("ModifiedDate");
            modelBuilder.Entity<TenantModuleRole>().Property(x => x.ModifiedBy).HasColumnName("ModifiedBy");

            //TenantModulePermission
            modelBuilder.Entity<TenantModulePermission>().ToTable("TenantModulePermissions", "dbo");
            modelBuilder.Entity<TenantModulePermission>().HasKey(x => x.Id);
            modelBuilder.Entity<TenantModulePermission>().Property(x => x.Id).HasColumnName("TenantModulePermissionId");
            modelBuilder.Entity<TenantModulePermission>().Property(x => x.Name).HasColumnName("Name");
            modelBuilder.Entity<TenantModulePermission>().Property(x => x.Description).HasColumnName("Description");

            //TenantModuleRole2TenantModulePermission
            modelBuilder.Entity<TenantModuleRole2TenantModulePermission>().ToTable("TenantModuleRole2TenantModulePermission", "dbo");
            modelBuilder.Entity<TenantModuleRole2TenantModulePermission>().HasKey(t => new { t.TenantModuleRoleId, t.TenantModulePermissionId });
            modelBuilder.Entity<TenantModuleRole2TenantModulePermission>()
                                                      .HasOne(pt => pt.TenantModuleRole)
                                                      .WithMany(p => p.TenantModulePermissions)
                                                      .HasForeignKey(pt => pt.TenantModuleRoleId);

            modelBuilder.Entity<TenantModuleRole2TenantModulePermission>()
                                                     .HasOne(pt => pt.TenantModulePermission)
                                                     .WithMany(t => t.TenantModuleRole2TenantModulePermission)
                                                     .HasForeignKey(pt => pt.TenantModulePermissionId);
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
