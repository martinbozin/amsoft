using System;
using System.Threading.Tasks;
using AMSoft.CloudOffice.Domain.Core;
using Microsoft.EntityFrameworkCore;

namespace AMSoft.CloudOffice.Data.Interfaces
{
    public interface ICloudOfficeDbContext : IDisposable
    {
        DbSet<AppTenant> AppTenants { get; set; }
        DbSet<Module> Modules { get; set; }
        DbSet<ModuleCategory> ModuleCategories { get; set; }

        int SaveChanges();

        Task<int> SaveChangesAsync();
    }
}