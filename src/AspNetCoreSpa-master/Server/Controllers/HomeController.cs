﻿// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

using System.Linq;
using System.Threading.Tasks;
using AspNetCoreSpa.Server.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.PlatformAbstractions;

namespace AspNetCoreSpa.Server.Controllers
{
    public class HomeController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IHostingEnvironment _env;

        public HomeController(UserManager<ApplicationUser> userManager, IHostingEnvironment env)
        {
            _userManager = userManager;
            _env = env;
        }

        public async Task<IActionResult> Index()
        {
            ViewBag.HashedMain = GetHashedMainDotJs();

            if (Request.Query.ContainsKey("emailConfirmCode") &&
                Request.Query.ContainsKey("userId"))
            {
                var userId = Request.Query["userId"].ToString();
                var code = Request.Query["emailConfirmCode"].ToString();
                code = code.Replace(" ", "+");

                var applicationUser = await _userManager.FindByIdAsync(userId);
                if (applicationUser != null && !applicationUser.EmailConfirmed)
                {
                    var valid = await _userManager.ConfirmEmailAsync(applicationUser, code);
                    if (valid.Succeeded)
                    {
                        ViewBag.emailConfirmed = true;
                    }
                }
            }
            else if (User.Identity != null && !string.IsNullOrEmpty(User.Identity.Name))
            {
                var user = await _userManager.FindByNameAsync(User.Identity.Name);
                var roles = await _userManager.GetRolesAsync(user);
                var userResult = new { User = new { DisplayName = user.UserName, Roles = roles.ToList() } };
                ViewBag.user = userResult;
            }

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
