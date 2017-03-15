using System;
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
    public class RolesController : TenantControllerBase
    {
        private readonly ILogger _logger;
        public RolesController(AppTenant appTenant, ILogger<TenantController> logger, IAppTenantDbContext appTenantContext, ICloudOfficeDbContext cloudOfficeContext)
            : base(appTenant, appTenantContext, cloudOfficeContext)
        {
            _logger = logger;
        }

        /// <summary>
        /// Action that return the current tenant roles
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetTenantRoles()
        {
            var tenant = CurrentTenant;
            if (tenant == null)
            {
                return Json(false);
            }
            var tenantRoles = _appTenantContext.TenantModuleRoles.ToList();
            if (!tenantRoles.Any()) return Json(null);
            var list = new List<AppTenantRoleViewModel>();
            foreach (var role in tenantRoles)
            {
                var model = new AppTenantRoleViewModel
                {
                    Name = role.Name,
                    //todo
                    //TenantModule = role.TenantModule,
                    Description = role.Description,
                };
                list.Add(model);
            }
            return Json(list);
        }
    }
}
