using System;
using AMSoft.CloudOffice.Domain.Base;
using AMSoft.CloudOffice.Domain.Core;

namespace AMSoft.CloudOffice.Domain.TenantModels
{
    /// <summary>
    /// Module Information
    /// </summary>
    public class TenantModule : BaseEntity<Guid>
    {
        /// <summary>
        /// Id in Central Database
        /// </summary>
        public int AppModuleId { get; set; }

        /// <summary>
        /// Module Name (from central database)
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Module License type
        /// </summary>
        public LicenseType LicenseType { get; set; }

        /// <summary>
        /// Used for Demo Lcienses
        /// </summary>
        public DateTime? ActivatedBy { get; set; }

        /// <summary>
        /// Date of Activation
        /// </summary>
        public DateTime? ActivationDate { get; set; }

        /// <summary>
        /// Used for Leased License types
        /// </summary>
        public DateTime? ExpirationDate { get; set; }

        /// <summary>
        /// Is Module Active,
        /// Can be deactivated by the System Administrator
        /// </summary>
        public bool IsActive { get; set; }

        public TenantModule(int appModuleId, string name)
        {
            AppModuleId = appModuleId;
            Name = name;

            LicenseType = LicenseType.Demo;
            IsActive = true;
        }
    }
}
