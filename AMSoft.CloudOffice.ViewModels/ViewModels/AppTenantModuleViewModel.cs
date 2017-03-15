using System;

namespace AMSoft.CloudOffice.ViewModels.ViewModels
{
    public class AppTenantModuleViewModel
    {
        public int AppModuleId { get; set; }
        public string Name { get; set; }
        //public LicenseType LicenseType { get; set; }
        public DateTime? ActivatedBy { get; set; }
        public DateTime? ActivationDate { get; set; }
        public DateTime? ExpirationDate { get; set; }
        public bool IsActive { get; set; }

    }
}
