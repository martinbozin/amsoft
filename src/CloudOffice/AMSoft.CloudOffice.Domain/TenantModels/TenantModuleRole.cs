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
        /// <summary>
        /// Role name
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// RoleDescription
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// The role must be assigned to single TenantModule
        /// </summary>
        public virtual TenantModule TenantModule { get; set; }

        /// <summary>
        /// The role can be assigned to multiple TenantUsers
        /// </summary>
        public virtual IEnumerable<TenantUser2TenantModuleRole> TenantUser2TenantModuleRoles { get; set; }


        /// <summary>
        /// The role can contains multiple TenantModulePermissions
        /// </summary>
        public virtual IEnumerable<TenantModuleRole2TenantModulePermission> TenantModulePermissions { get; set; }
    }

    /// <summary>
    /// EF doesnot support ManyToMany relations
    /// </summary>
    public class TenantModuleRole2TenantModulePermission
    {
        public TenantModuleRole TenantModuleRole { get; set; }

        public Guid TenantModuleRoleId { get; set; }

        public TenantModulePermission TenantModulePermission { get; set; }

        public Guid TenantModulePermissionId { get; set; }
    }
}