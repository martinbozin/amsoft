using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AMSoft.Base.Multitenancy;
using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Domain.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;

namespace AMSoft.CloudOffice.Infrastructure.Multitenancy
{
    public class CachingAppTenantResolver : MemoryCacheTenantResolver<AppTenant>
    {
        public CachingAppTenantResolver(IMemoryCache cache, ILoggerFactory loggerFactory)
        : base(cache, loggerFactory)
        {
        }

        protected override string GetContextIdentifier(HttpContext context)
        {
            return context.Request.Host.Value.ToLower();
        }

        protected override IEnumerable<string> GetTenantIdentifiers(TenantContext<AppTenant> context)
        {
            return context.Tenant.Hostnames;
        }

        protected override Task<TenantContext<AppTenant>> ResolveAsync(HttpContext context)
        {
            //Get All Tenants
            List<AppTenant> tenants;
            if (!cache.TryGetValue("AppTenants", out tenants))
            {
                tenants = GetTenants().ToList();
                cache.CreateEntry("AppTenants").Value = tenants;
            }

            //Get current tenant
            AppTenant currentTenant = null;
            var hostName = context.Request.Host.Value.ToLower();
            foreach (var ten in tenants)
            {
                var hosts = ten.Hostname.Split(';');
                if (hosts.Any(item => item == hostName))
                {
                    currentTenant = ten;
                    currentTenant.Hostnames = hosts;
                }
            }

            if (currentTenant == null)
                return Task.FromResult((TenantContext<AppTenant>)null);

            var tenantContext = new TenantContext<AppTenant>(currentTenant);
            return Task.FromResult(tenantContext);
        }

        private IEnumerable<AppTenant> GetTenants()
        {
            var tenants = new List<AppTenant>();
            using (var contextDb = new CloudOfficeDbContext())
            {
                var listTenants = contextDb.AppTenants.Include(i => i.Modules).ToList();
                if (listTenants != null)
                {
                    tenants = listTenants;
                }
            }
            return tenants;
        }
    }
}