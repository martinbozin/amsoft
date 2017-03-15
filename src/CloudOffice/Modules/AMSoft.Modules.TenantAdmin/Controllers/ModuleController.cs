using System;
using System.Collections.Generic;
using System.Linq;
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
        public ModuleController(AppTenant appTenant, ILogger<TenantController> logger)
            : base(appTenant)
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
            var tenantModules = tenant.Modules.ToList();
            if (!tenantModules.Any()) return Json(null);
            var list = new List<ModuleViewModel>();
            foreach (var module in tenantModules)
            {
                var model = new ModuleViewModel
                {
                    ModuleId = module.ModuleId,
                    Name = module.Name,
                    CategoryName = module.ModuleCategory.Name
                };
                list.Add(model);
            }
            return Json(list);
        }
    } 
}
