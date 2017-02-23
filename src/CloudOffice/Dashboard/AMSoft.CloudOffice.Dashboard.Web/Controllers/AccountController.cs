using System.Threading.Tasks;
using AMSoft.CloudOffice.Domain.Core;
using AMSoft.CloudOffice.Infrastructure.Mvc;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AMSoft.CloudOffice.Web.Controllers
{
    public class AccountController : TenantControllerBase
    {
        private readonly ILogger<AccountController> _logger;

        public AccountController(ILogger<AccountController> logger, AppTenant appTenant)
            : base(appTenant)
        {
            this._logger = logger;
        }

        public IActionResult LogIn(string returnUrl)
        {
            _logger.LogDebug("on login action requested", returnUrl);

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

        public async Task<IActionResult> LogOut()
        {
            _logger.LogDebug("on login out action requested");
            await HttpContext.Authentication.SignOutAsync($"{CurrentTenant.AppTenantId}.AspNet.Cookies");
            return RedirectToAction("index", "home");
        }
    }
}