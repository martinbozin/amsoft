using System;
using System.Threading.Tasks;
using AMSoft.IdentityServer.Data.EntityFramework.Entities;
using Microsoft.EntityFrameworkCore;

namespace AMSoft.IdentityServer.Data.EntityFramework.Interfaces
{
    public interface IConfigurationDbContext : IDisposable
    {
        DbSet<Client> Clients { get; set; }
        DbSet<IdentityResource> IdentityResources { get; set; }
        DbSet<ApiResource> ApiResources { get; set; }

        int SaveChanges();

        Task<int> SaveChangesAsync();
    }
}