using System;
using System.Collections.Generic;
using ExtCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;

namespace AMSoft.Modules.Tempplate
{
  public class RouteBuilder : ExtensionBase
  {
    public override IEnumerable<KeyValuePair<int, Action<IRouteBuilder>>> UseMvcActionsByPriorities
    {
      get
      {
        return new Dictionary<int, Action<IRouteBuilder>>()
        {
          [1000] = routeBuilder =>
          {
            routeBuilder.MapRoute(name: "TenantAdmin", template: "", defaults: new { controller = "TenantAdmin", action = "Index" });
          }
        };
      }
    }
  }
}