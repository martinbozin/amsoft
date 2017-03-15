using System;
using System.Threading.Tasks;
using AMSoft.CloudOffice.Domain.Core;
using AMSoft.CloudOffice.Domain.TenantModels;
using Microsoft.EntityFrameworkCore;

namespace AMSoft.CloudOffice.Data.Interfaces
{
    public interface IAppTenantDbContext : IDisposable
    {
        DbSet<TenantModule> TenantModules { get; set; }
        DbSet<TenantModulePermission> TenantModulePermissions { get; set; }
        DbSet<TenantModuleRole> TenantModuleRoles { get; set; }
        DbSet<TenantUser> TenantUsers { get; set; }

        int SaveChanges();

        Task<int> SaveChangesAsync();
    }
}