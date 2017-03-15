using System.Collections.Generic;
using System.Linq;
using AMSoft.CloudOffice.Data.Interfaces;
using AMSoft.CloudOffice.Domain.Core;
using AMSoft.CloudOffice.Infrastructure.Mvc;
using AMSoft.CloudOffice.ViewModels.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AMSoft.Modules.TenantAdministration.Controllers
{
    /// <summary>
    /// Tenant controller for tenant actions
    /// </summary>
    [ModuleRoute("TenantAdministration")]
    public class ModuleController : TenantControllerBase
    {
        private readonly ILogger _logger;
        public ModuleController(AppTenant appTenant, ILogger<TenantController> logger, IAppTenantDbContext appTenantContext, ICloudOfficeDbContext cloudOfficeContext)
            : base(appTenant, appTenantContext,cloudOfficeContext)
        {
            _logger = logger;
        }

        /// <summary>
        /// Action that return the current tenant modules
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetTenantModules()
        {
            var tenant = CurrentTenant;
            if (tenant == null)
            {
                return Json(false);
            }
            var tenantModules = _appTenantContext.TenantModules.ToList();
            if (!tenantModules.Any()) return Json(null);
            var list = new List<AppTenantModuleViewModel>();
            foreach (var module in tenantModules)
            {
                var model = new AppTenantModuleViewModel
                {
                    AppModuleId = module.AppModuleId,
                    Name = module.Name,
                    ActivatedBy = module.ActivatedBy,
                    ActivationDate = module.ActivationDate,
                    ExpirationDate  = module.ExpirationDate,
                    IsActive = module.IsActive
                };
                list.Add(model);
            }
            return Json(list);
        }
    } 
}
