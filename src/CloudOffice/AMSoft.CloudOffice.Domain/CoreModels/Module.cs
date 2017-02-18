namespace AMSoft.CloudOffice.Domain.CoreModels
{
    public class Module
    {
        public int ModuleId { get; set; }
        public string Name { get; set; }
        public virtual AppTenant AppTenant { get; set;}
        public virtual Category Category { get; set; }
    }
}
