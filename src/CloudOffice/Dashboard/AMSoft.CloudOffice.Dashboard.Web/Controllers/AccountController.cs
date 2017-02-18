using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;

namespace AMSoft.CloudOffice.Web.Controllers
{
    [Route("account")]
    public class AccountController : Controller
    {
        [Route("logout")]
        [HttpGet, HttpPost]
        public async Task<IActionResult> LogOut()
        {
            // Instruct the cookies middleware to delete the local cookie created when the user agent
            // is redirected from the identity provider after a successful authorization flow.
            await HttpContext.Authentication.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

            return RedirectToAction("index", "home");
        }
    }
}