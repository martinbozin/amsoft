using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace AMSoft.Modules.TenantAdministration.Controllers
{
    public class TenantController : Controller
    {
        private readonly IHostingEnvironment _env;

        public TenantController(IHostingEnvironment env)
        {
            _env = env;
        }

        [HttpGet]
        public TenantViewModel TenantName(string name, string address, string phone)
        {
            TenantViewModel model = new TenantViewModel
            {
                name = "AM SOFT",
                address = "Skopje",
                phone = "070"
            };
            return model;
        }
    }

    public class TenantViewModel
    {
        public string name { get; set; }
        public string address { get; set; }
        public string phone { get; set; }
    }

}
