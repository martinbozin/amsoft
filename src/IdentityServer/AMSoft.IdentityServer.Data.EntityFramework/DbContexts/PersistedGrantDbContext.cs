using System;
using System.Threading.Tasks;
using AMSoft.IdentityServer.Data.EntityFramework.Entities;
using AMSoft.IdentityServer.Data.EntityFramework.Extensions;
using AMSoft.IdentityServer.Data.EntityFramework.Interfaces;
using AMSoft.IdentityServer.Data.EntityFramework.Options;
using Microsoft.EntityFrameworkCore;

namespace AMSoft.IdentityServer.Data.EntityFramework.DbContexts
{
    public class PersistedGrantDbContext : DbContext, IPersistedGrantDbContext
    {
        private readonly OperationalStoreOptions _storeOptions;

        public PersistedGrantDbContext(DbContextOptions<PersistedGrantDbContext> options, OperationalStoreOptions storeOptions)
            : base(options)
        {
            if (storeOptions == null) throw new ArgumentNullException(nameof(storeOptions));
            this._storeOptions = storeOptions;
        }

        public DbSet<PersistedGrant> PersistedGrants { get; set; }

        public Task<int> SaveChangesAsync()
        {
            return base.SaveChangesAsync();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ConfigurePersistedGrantContext(_storeOptions);

            base.OnModelCreating(modelBuilder);
        }
    }
}