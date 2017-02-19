using System;
using System.Collections.Generic;
using AMSoft.CloudOffice.Domain.Base;

namespace AMSoft.CloudOffice.Domain.TenantModels
{
    /// <summary>
    /// User Info - 
    /// Can be extended with Tenant specific data also
    /// </summary>
    public class TenantUser : BaseEntity<Guid>
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string FullName { get; set; }

        public virtual IEnumerable<TenantModuleRole> Roles { get; set; }
    }
}