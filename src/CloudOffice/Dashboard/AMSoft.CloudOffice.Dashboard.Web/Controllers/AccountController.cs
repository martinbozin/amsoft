using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AMSoft.CloudOffice.Web.Controllers
{
    public class AccountController : Controller
    {
        ILogger<AccountController> _logger;

        public AccountController(ILogger<AccountController> logger)
        {
            this._logger = logger;
        }

        public IActionResult LogIn(string returnUrl)
        {
            //todo:
            var props = new AuthenticationProperties
            {
                RedirectUri = "/"
            };

            if (Url.IsLocalUrl(returnUrl))
            {
                props.RedirectUri = returnUrl;
            }

            return new ChallengeResult("oidc", props);
        }

        //public IActionResult Google()
        //{
        //    var props = new AuthenticationProperties
        //    {
        //        RedirectUri = "/home/about"
        //    };
        //    return new ChallengeResult("Google", props);
        //}

        public async Task<IActionResult> LogOut()
        {
            await HttpContext.Authentication.SignOutAsync("Cookies");
            return RedirectToAction("index", "home");
        }
    }
}