using System.Collections.Generic;

namespace AMSoft.CloudOffice.ViewModels.ViewModels
{
    public class CategoryViewModel
    {
        public List<ModuleViewModel> Modules;
        public CategoryViewModel()
        {
            Modules = new List<ModuleViewModel>();
        }
        public int CategoryId { get; set; }
        public string Name { get; set; }
    }
}
