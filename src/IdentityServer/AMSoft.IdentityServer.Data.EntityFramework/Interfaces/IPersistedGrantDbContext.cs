using System;
using System.Threading.Tasks;
using AMSoft.IdentityServer.Data.EntityFramework.Entities;
using Microsoft.EntityFrameworkCore;

namespace AMSoft.IdentityServer.Data.EntityFramework.Interfaces
{
    public interface IPersistedGrantDbContext : IDisposable
    {
        DbSet<PersistedGrant> PersistedGrants { get; set; }

        int SaveChanges();

        Task<int> SaveChangesAsync();
    }
}