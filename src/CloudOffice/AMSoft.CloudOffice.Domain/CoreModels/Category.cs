using System.Collections.Generic;

namespace AMSoft.CloudOffice.Domain.CoreModels
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public virtual List<Module> Modules { get; set;}
    }
}
