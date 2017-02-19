using System;
using AMSoft.CloudOffice.Domain.Base;

namespace AMSoft.CloudOffice.Domain.TenantModels
{
    public class TenantModulePermission : BaseEntity<Guid>
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public TenantModule Module { get; set; }
    }
}