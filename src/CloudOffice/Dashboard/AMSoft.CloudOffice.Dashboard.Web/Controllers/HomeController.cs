using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Domain.CoreModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AMSoft.CloudOffice.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppTenant _tenant;
        public HomeController(AppTenant tenant)
        {
            this._tenant = tenant;
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
