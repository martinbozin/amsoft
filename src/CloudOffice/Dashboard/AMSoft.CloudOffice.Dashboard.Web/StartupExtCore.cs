using System;

namespace AMSoft.CloudOffice.Web
{
    public class StartupExtCore : ExtCore.WebApplication.Startup
    {
        protected StartupExtCore(IServiceProvider serviceProvider)
      : base(serviceProvider)
        {

        }
    }
}
