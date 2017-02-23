using System;
using AMSoft.CloudOffice.Domain.Core;
using Microsoft.AspNetCore.Mvc;

namespace AMSoft.CloudOffice.Infrastructure.Mvc
{
    public class TenantControllerBase : Controller
    {
        public TenantControllerBase(AppTenant appTenant)
        {
            if (appTenant == null) throw new ArgumentNullException(nameof(appTenant));
            CurrentTenant = appTenant;
        }

        protected AppTenant CurrentTenant { get; }
    }
}