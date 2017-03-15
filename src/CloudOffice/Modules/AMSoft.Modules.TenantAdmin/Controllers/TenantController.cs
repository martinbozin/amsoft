using System;
using AMSoft.CloudOffice.Data;
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
    public class TenantController : TenantControllerBase
    {
        private readonly ILogger _logger;
        public TenantController(AppTenant appTenant, IAppTenantDbContext appTenantContext, ICloudOfficeDbContext cloudOfficeContext,ILogger<TenantController> logger)
            : base(appTenant,  appTenantContext, cloudOfficeContext)
        {
            _logger = logger;
        }

        /// <summary>
        /// Action that return the current tenant info
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetTenantInfo()
        {
            var tenant = CurrentTenant;
            if (tenant == null)
            {
                return Json(false);
            }
            var model = new AppTenantViewModel
            {
                Name = tenant.Name,
                Address = tenant.Address,
                Phone = tenant.Phone
            };
            return Json(model);
        }

        /// <summary>
        /// Action that update tenant values
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult UpdateTenantInfo(AppTenantViewModel model)
        {
            try
            {
                var tenant = CurrentTenant;
                if (tenant == null)
                {
                    return Json(false);
                }
                tenant.Name = model.Name;
                tenant.Address = model.Address;
                tenant.Phone = model.Phone;
                _cloudOfficeContext.SaveChanges();
                return Json(true);
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                throw;
            }
        }
    } 
}
