﻿using AMSoft.CloudOffice.Data.Interfaces;
using AMSoft.CloudOffice.Domain.Core;
using AMSoft.CloudOffice.Infrastructure.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AMSoft.CloudOffice.Web.Controllers
{
    public class HomeController : TenantControllerBase
    {
        public HomeController(AppTenant appTenant, IAppTenantDbContext appTenantContext, ICloudOfficeDbContext cloudOfficeContext)
            : base(appTenant, appTenantContext, cloudOfficeContext)
        {

        }

        [Authorize]
        public IActionResult Index()
        {
            return View();
        }

        [Authorize]
        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        [Authorize]
        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
