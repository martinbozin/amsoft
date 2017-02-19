using System;
using System.Collections.Generic;
using AMSoft.CloudOffice.Domain.Base;

namespace AMSoft.CloudOffice.Domain.TenantModels
{
    /// <summary>
    /// Roles for TenantModule,
    /// They are copied (by default) from ModuleRoleDefault from the main database
    /// </summary>
    public class TenantModuleRole : BaseEntity<Guid>
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public virtual IEnumerable<TenantUser> Users { get; set; }

        public virtual IEnumerable<TenantModulePermission> Permissions { get; set; }
    }
}