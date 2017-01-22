using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Domain.CoreModels;
using Microsoft.AspNetCore.Mvc;

namespace AMSoft.CloudOffice.Dashboard.Web.Controllers
{
    public class HomeController : Controller
    {
        private AppTenant tenant;
        public HomeController(AppTenant tenant)
        {
            this.tenant = tenant;
        }
        public IActionResult Index()
        {
            using (var contextDb = new SqlServerApplicationDbContext(tenant))
            {
                var exist = contextDb.ToString();
            }
            ViewData["Tenant"] = tenant.Name;
            return View();
        }

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
