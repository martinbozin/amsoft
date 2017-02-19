using System;
using System.Collections.Generic;

namespace AMSoft.CloudOffice.Domain.TenantModels
{
    public class TenantModulePermission
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public virtual IEnumerable<TenantModuleRole2TenantModulePermission> TenantModuleRole2TenantModulePermission { get; set; }

        /// <summary>
        /// This permission is allowed for TenantModule
        /// </summary>
        public virtual TenantModule TenantModule { get; set; }
    }
}