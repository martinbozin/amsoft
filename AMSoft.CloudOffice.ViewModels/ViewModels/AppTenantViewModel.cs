using System.Collections.Generic;
namespace AMSoft.CloudOffice.ViewModels.ViewModels
{
    public class AppTenantViewModel
    {
        public List<ModuleViewModel> Modules;
        public AppTenantViewModel()
        {
            Modules = new List<ModuleViewModel>();
        }
        public int AppTenantId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
    }
}
