using System;
using System.Threading.Tasks;
using AMSoft.IdentityServer.Data.EntityFramework.Entities;
using AMSoft.IdentityServer.Data.EntityFramework.Extensions;
using AMSoft.IdentityServer.Data.EntityFramework.Interfaces;
using AMSoft.IdentityServer.Data.EntityFramework.Options;
using Microsoft.EntityFrameworkCore;

namespace AMSoft.IdentityServer.Data.EntityFramework.DbContexts
{
    public class ConfigurationDbContext : DbContext, IConfigurationDbContext
    {
        private readonly ConfigurationStoreOptions storeOptions;

        public ConfigurationDbContext(DbContextOptions<ConfigurationDbContext> options, ConfigurationStoreOptions storeOptions)
            : base(options)
        {
            if (storeOptions == null) throw new ArgumentNullException(nameof(storeOptions));
            this.storeOptions = storeOptions;
        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<IdentityResource> IdentityResources { get; set; }
        public DbSet<ApiResource> ApiResources { get; set; }

        public Task<int> SaveChangesAsync()
        {
            return base.SaveChangesAsync();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ConfigureClientContext(storeOptions);
            modelBuilder.ConfigureResourcesContext(storeOptions);

            base.OnModelCreating(modelBuilder);
        }
    }
}