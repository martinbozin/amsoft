using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AMSoft.Base.Multitenancy;
using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace AMSoft.CloudOffice.Dashboard.Web
{
    public class CachingAppTenantResolver : MemoryCacheTenantResolver<AppTenant>
    {
        private readonly IEnumerable<AppTenant> tenants;
        public CachingAppTenantResolver(IMemoryCache cache, ILoggerFactory loggerFactory, IOptions<MultitenancyOptions> options)
        : base(cache, loggerFactory)

        {
            this.tenants = options.Value.Tenants;
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
            TenantContext<AppTenant> tenantContext = null;
            IEnumerable<AppTenant> tenants = new List<AppTenant>();
            AppTenant tenant = null;
            using (var contextDb = new CloudOfficeDbContext())
            {
                var listTenants = contextDb.AppTenants.ToList();
                if (listTenants !=null)
                {
                    tenants = listTenants;
                }
            }

            var hostName = context.Request.Host.Value.ToLower();
            foreach (var ten in tenants)
            {
                var hosts = ten.Hostname.Split(';');
                foreach (var item in hosts)
                {
                    if (item == hostName)
                    {
                        tenant = ten;
                        tenant.Hostnames = hosts;
                        break;
                    }
                }
            }

            if (tenant != null)
            {
                tenantContext = new TenantContext<AppTenant>(tenant);
            }

            return Task.FromResult(tenantContext);
        }
    }
}
