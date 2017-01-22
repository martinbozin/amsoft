using System.Collections.ObjectModel;
using AMSoft.CloudOffice.Domain.CoreModels;

namespace AMSoft.CloudOffice.Dashboard.Web
{
    public class MultitenancyOptions
    {
        public Collection<AppTenant> Tenants { get; set; }
    }
}
