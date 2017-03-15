using AMSoft.CloudOffice.Domain.Core;
using AMSoft.CloudOffice.Infrastructure.Mvc;
using AMSoft.CloudOffice.ViewModels.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AMSoft.Modules.TenantAdministration.Controllers
{
    /// <summary>
    /// Tenant controller for tenant actions
    /// </summary>
    [ModuleRoute("TenantAdministration")]
    public class TenantController : TenantControllerBase
    {
        public TenantController(AppTenant appTenant)
            : base(appTenant)
        {

        }

        /// <summary>
        /// Action that return the current tenant
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetTenant()
        {
            var tenant = CurrentTenant;
            if (tenant == null)
            {
                return Json(null);
            }
            var model = new AppTenantViewModel {Name = tenant.Name};
            return Json(model);
        }
    }
 

}
