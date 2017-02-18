using System.Linq;
using ExtCore.Infrastructure;
using Microsoft.AspNetCore.Mvc;

namespace AMSoft.Modules.TenantAdministration.Controllers
{
  public class TenantAdministrationController : Controller
  {
    public ActionResult Index()
    {
      return this.View(ExtensionManager.Extensions.Select(e => e.Name));
    }
  }
}