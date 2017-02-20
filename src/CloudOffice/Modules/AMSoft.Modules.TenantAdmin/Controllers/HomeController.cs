using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace AMSoft.Modules.TenantAdministration.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHostingEnvironment _env;

        public HomeController(IHostingEnvironment env)
        {
            _env = env;
        }
        public IActionResult Index()
        {
            ViewBag.HashedMain = GetHashedMainDotJs();
            return View();
        }


        public string GetHashedMainDotJs()
        {
            var basePath = _env.WebRootPath + "//dist//";
            var info = new System.IO.DirectoryInfo(basePath);
            var file = info.GetFiles().Where(f => f.Name.StartsWith("main.") && !f.Name.EndsWith("bundle.map")).FirstOrDefault();
            return file.Name;
        }
    }
}
