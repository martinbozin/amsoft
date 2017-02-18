using Microsoft.AspNetCore.Mvc;

namespace AMSoft.Modules.TenantAdmin.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
