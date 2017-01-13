using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AMSoft.Base.Multitenancy;
using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Domain;
using Microsoft.AspNetCore.Http;

namespace AMSoft.CloudOffice.Dashboard.Web
{
    public class AppTenantResolver : ITenantResolver<AppTenant>
    {
        public async Task<TenantContext<AppTenant>> ResolveAsync(HttpContext context)
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

            return tenantContext;
        }
    }
}
