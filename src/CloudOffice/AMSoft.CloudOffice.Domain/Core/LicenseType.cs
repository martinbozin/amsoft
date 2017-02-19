namespace AMSoft.CloudOffice.Domain.Core
{
    /// <summary>
    /// Module License Type
    /// </summary>
    public enum LicenseType
    {       
        /// <summary>
        /// Module is activated forever
        /// </summary>
        Permanent = 0,

        /// <summary>
        /// Module must be Activated until ActivatedBy
        /// </summary>
        Demo = 1,

        /// <summary>
        /// Module is Activated by has an ExpirationDate 
        /// After the ExpirationDate the system will automatically revert the LicenseType to Demo
        /// </summary>
        Leased = 2
    }
}