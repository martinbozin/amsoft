using Microsoft.AspNetCore.Mvc;

namespace AMSoft.Modules.TenantAdministration.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
