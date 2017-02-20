using System.Linq;
using ExtCore.Infrastructure;
using Microsoft.AspNetCore.Mvc;

namespace AMSoft.Modules.TestModule.Controllers
{
  public class TestModuleController : Controller
  {
    public ActionResult Index()
    {
      return this.View(ExtensionManager.Extensions.Select(e => e.Name));
    }
  }
}