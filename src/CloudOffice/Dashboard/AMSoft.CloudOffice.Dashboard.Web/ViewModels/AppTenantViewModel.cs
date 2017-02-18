using System.Collections.Generic;
namespace AMSoft.CloudOffice.Web.ViewModels
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
    }
}
