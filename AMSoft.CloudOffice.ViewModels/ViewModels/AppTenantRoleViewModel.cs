namespace AMSoft.CloudOffice.ViewModels.ViewModels
{
    public class AppTenantRoleViewModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual AppTenantModuleViewModel TenantModule { get; set; }

        //public virtual IEnumerable<TenantUser2TenantModuleRole> TenantUser2TenantModuleRoles { get; set; }
        //public virtual IEnumerable<TenantModuleRole2TenantModulePermission> TenantModulePermissions { get; set; }

    }
}
