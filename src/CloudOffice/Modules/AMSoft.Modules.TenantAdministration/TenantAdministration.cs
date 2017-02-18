using System;
using System.Collections.Generic;
using ExtCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;

namespace AMSoft.Modules.TenantAdministration
{
  public class TenantAdministration : ExtensionBase
  {
    public override IEnumerable<KeyValuePair<int, Action<IRouteBuilder>>> UseMvcActionsByPriorities
    {
      get
      {
        return new Dictionary<int, Action<IRouteBuilder>>()
        {
          [1000] = routeBuilder =>
          {
            routeBuilder.MapRoute(name: "TenantAdministration", template: "", defaults: new { controller = "TenantAdministration", action = "Index" });
          }
        };
      }
    }
  }
}