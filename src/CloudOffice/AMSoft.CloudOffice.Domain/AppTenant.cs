using System.Collections.ObjectModel;

namespace AMSoft.CloudOffice.Domain
{
    public class AppTenant
    {
        public int AppTenantId { get; set; }
        public string Name { get; set; }
        public string Hostname { get; set; }
        public string[] Hostnames { get; set; }
    }
}
