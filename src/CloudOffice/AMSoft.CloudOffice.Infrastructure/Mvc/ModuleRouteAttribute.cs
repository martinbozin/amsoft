using System;
using Microsoft.AspNetCore.Mvc.Routing;

namespace AMSoft.CloudOffice.Infrastructure.Mvc
{
    public class ModuleRouteAttribute : RouteValueAttribute
    {
        public ModuleRouteAttribute(string moduleName)
            : base("Module", moduleName)
        {
            if (string.IsNullOrEmpty(moduleName))
            {
                throw new ArgumentException("Module name must not be empty", nameof(moduleName));
            }
        }
    }
}
