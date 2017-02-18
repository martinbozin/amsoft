using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AMSoft.Base.Multitenancy;
using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Domain.CoreModels;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;

namespace AMSoft.CloudOffice.Web.Multitenantcy
{
    public class CachingAppTenantResolver : MemoryCacheTenantResolver<AppTenant>
    {
        private List<AppTenant> _tenants;

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
            AppTenant tenant = null;
            TenantContext<AppTenant> tenantContext = null;

            var tenants = GetTenants();

            var hostName = context.Request.Host.Value.ToLower();
            foreach (var ten in tenants)
            {
                var hosts = ten.Hostname.Split(';');
                if (hosts.Any(item => item == hostName))
                {
                    tenant = ten;
                    tenant.Hostnames = hosts;
                }
            }

            if (tenant != null)
            {
                tenantContext = new TenantContext<AppTenant>(tenant);
            }

            return Task.FromResult(tenantContext);
        }

        private IEnumerable<AppTenant> GetTenants()
        {
            if (_tenants != null)
                return _tenants;

            _tenants = new List<AppTenant>();

            using (var contextDb = new CloudOfficeDbContext())
            {
                var listTenants = contextDb.AppTenants.ToList();
                if (listTenants != null)
                {
                    _tenants = listTenants;
                }
            }

            return _tenants;
        }
    }
}
