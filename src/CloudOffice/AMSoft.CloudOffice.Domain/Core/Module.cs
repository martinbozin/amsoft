using System.Collections.Generic;

namespace AMSoft.CloudOffice.Domain.Core
{
    public class Module
    {
        public int ModuleId { get; set; }

        public string Name { get; set; }

        public virtual AppTenant AppTenant { get; set;}

        public virtual ModuleCategory ModuleCategory { get; set; }

        public virtual IEnumerable<ModuleRoleDefault> ModuleRoleDefaults { get; set; }
    }
}