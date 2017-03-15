using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc.Razor;

namespace AMSoft.CloudOffice.Infrastructure.Mvc
{
    public class ViewLocationExpander : IViewLocationExpander
    {
        public const string ThemeKey = "Theme";

        public void PopulateValues(ViewLocationExpanderContext context)
        {
            //string theme = context.ActionContext.HttpContext.Items[ThemeKey].ToString();
            //context.Values[ThemeKey] = theme;
        }

        public IEnumerable<string> ExpandViewLocations(ViewLocationExpanderContext context, IEnumerable<string> viewLocations)
        {

            //if (context.Values.TryGetValue(ThemeKey, out string theme))
            //{
            //    viewLocations = new[]
            //    {
            //        $"/Themes/{theme}/Views/{{1}}/{{0}}.cshtml",
            //        $"/Themes/{theme}/Views/Shared/{{0}}.cshtml",
            //        $"/Themes/{theme}/Modules/{{2}}/Views/{{1}}/{{0}}.cshtml",
            //        $"/Themes/{theme}/Modules/{{2}}/Views/Shared/{{0}}.cshtml",
            //        $"/Themes/{theme}/Areas/{{2}}/Views/{{1}}/{{0}}.cshtml",
            //        $"/Themes/{theme}/Areas/{{2}}/Views/Shared/{{0}}.cshtml",
            //        "/Modules/{2}/Views/{1}/{0}.cshtml",
            //        "/Modules/{2}/Views/Shared/{0}.cshtml"
            //    }
            //    .Concat(viewLocations);
            //}

            viewLocations = new[]
                {
                    "/Modules/{2}/Views/{1}/{0}.cshtml",
                    "/Modules/{2}/Views/Shared/{0}.cshtml"
                }
                .Concat(viewLocations);

            return viewLocations;
        }
    }
}
