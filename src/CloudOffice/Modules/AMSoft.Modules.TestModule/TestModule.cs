using System;
using System.Collections.Generic;
using ExtCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;

namespace AMSoft.Modules.TestModule
{
    public class TestModule : ExtensionBase
    {
        public override IEnumerable<KeyValuePair<int, Action<IRouteBuilder>>> UseMvcActionsByPriorities
        {
            get
            {
                return new Dictionary<int, Action<IRouteBuilder>>()
                {
                    [1000] = routeBuilder =>
                    {
                        routeBuilder.MapRoute(name: "TestModule", template: "",
                            defaults: new { controller = "TestModule", action = "Index" });
                    }
                };
            }
        }
    }
}