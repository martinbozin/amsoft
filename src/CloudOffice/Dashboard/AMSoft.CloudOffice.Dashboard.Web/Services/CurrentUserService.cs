using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace AMSoft.CloudOffice.Web.Services
{
    public class CurrentUserService
    {
        private readonly IHttpContextAccessor _contextAccessor;

        private HttpContext HttpContext => _contextAccessor.HttpContext;

        public CurrentUserService(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
        }

        public string UserName
        {
            get
            {
                var userName = string.Empty;

                // Figure out the user's identity
                var identity = HttpContext?.User?.Identity;
                if (identity != null && identity.IsAuthenticated)
                {
                    userName = identity.Name;
                }

                return userName;
            }
        }


        public string DisplayName
        {
            get
            {
                var displayName = string.Empty;

                // Figure out the user's identity
                var identity = HttpContext?.User?.Identity as ClaimsIdentity;
                if (identity != null && identity.IsAuthenticated)
                {
                    var claim = identity.FindFirst("name");
                    // Test for null to avoid issues during local testing
                    return (claim != null) ? claim.Value : string.Empty;
                }

                return displayName;
            }
        }
    }
}