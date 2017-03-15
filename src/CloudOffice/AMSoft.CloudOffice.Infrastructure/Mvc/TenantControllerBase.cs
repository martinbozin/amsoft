using System;
using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Data.Interfaces;
using AMSoft.CloudOffice.Domain.Core;
using Microsoft.AspNetCore.Mvc;

namespace AMSoft.CloudOffice.Infrastructure.Mvc
{
    public class TenantControllerBase : Controller
    {
        public TenantControllerBase(AppTenant appTenant, IAppTenantDbContext appTenantContext , ICloudOfficeDbContext cloudOfficeContext)
        {
            if (appTenant == null) throw new ArgumentNullException(nameof(appTenant));
            if (appTenantContext == null) throw new ArgumentNullException(nameof(appTenantContext));
            if (cloudOfficeContext == null) throw new ArgumentNullException(nameof(cloudOfficeContext));

            _appTenantContext = appTenantContext;
            _cloudOfficeContext = cloudOfficeContext;
            CurrentTenant = appTenant;
        }

        protected IAppTenantDbContext _appTenantContext;
        protected ICloudOfficeDbContext _cloudOfficeContext;
        protected AppTenant CurrentTenant { get; }
    }
}