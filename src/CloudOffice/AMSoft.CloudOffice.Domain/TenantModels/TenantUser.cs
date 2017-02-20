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

        public bool IsActive { get; set; }

        /// <summary>
        /// User can be assigned to multiple roles on different modules
        /// </summary>
        public virtual IEnumerable<TenantUser2TenantModuleRole> TenantUser2TenantModuleRoles { get; set; }

        public string Phone { get; set; }

        public string Mobile { get; set; }
    }

    /// <summary>
    /// EF doesnot support ManyToMany relations
    /// </summary>
    public class TenantUser2TenantModuleRole
    {
        public TenantUser TenantUser { get; set; }

        public TenantModuleRole TenantModuleRole { get; set; }

        public Guid TenantUserId { get; set; }
        public Guid TenantModuleRoleId { get; set; }
    }
}