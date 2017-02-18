using System.Collections.Generic;

namespace AMSoft.CloudOffice.Domain.CoreModels
{
    public class ModuleCategory
    {
        public int ModuleCategoryId { get; set; }
        public string Name { get; set; }
        public virtual List<Module> Modules { get; set;}
    }
}
