using System.Threading.Tasks;
using AMSoft.CloudOffice.Domain.Core;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace AMSoft.CloudOffice.Infrastructure.Mvc
{
    public class ThemeMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly AppTenant _appTenant;

        public ThemeMiddleware(RequestDelegate next,
            AppTenant appTenant)
        {
            _next = next;
            _appTenant = appTenant;
        }

        public Task Invoke(HttpContext context)
        {
            context.Request.HttpContext.Items[ViewLocationExpander.ThemeKey] = _appTenant.Theme;
            return _next(context);
        }
    }

    public static class ApplicationBuilderExtensions
    {
        public static IApplicationBuilder UseThemes(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ThemeMiddleware>();
        }
    }
}
