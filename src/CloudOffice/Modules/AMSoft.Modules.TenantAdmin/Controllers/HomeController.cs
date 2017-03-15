using System.Linq;
using AMSoft.CloudOffice.Data.Interfaces;
using AMSoft.CloudOffice.Domain.Core;
using AMSoft.CloudOffice.Infrastructure.Mvc;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace AMSoft.Modules.TenantAdministration.Controllers
{
    [ModuleRoute("TenantAdministration")]
    public class HomeController : TenantControllerBase
    {
        private readonly IHostingEnvironment _env;

        public HomeController(IHostingEnvironment env, AppTenant appTenant, IAppTenantDbContext appTenantContext, ICloudOfficeDbContext cloudOfficeContext)
            : base(appTenant, appTenantContext, cloudOfficeContext)
        {
            _env = env;
        }
        public IActionResult Index()
        {
            ViewBag.HashedMain = GetHashedMainDotJs();
            return View("~/Modules/AMSoft.Modules.TenantAdmin/Views/Home/Index.cshtml");
        }


        public string GetHashedMainDotJs()
        {

            var webRoot = _env.WebRootPath;
            var basePath = webRoot + "/../Modules/AMSoft.Modules.TenantAdmin/wwwroot/dist//";
            var info = new System.IO.DirectoryInfo(basePath);
            var file = info.GetFiles().Where(f => f.Name.StartsWith("main.") && !f.Name.EndsWith("bundle.map")).FirstOrDefault();
            return file.Name;
        }
    }
}
