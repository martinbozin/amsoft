namespace AMSoft.CloudOffice.Domain.Core
{
    /// <summary>
    /// Holds info about default roles for module
    /// </summary>
    public class ModuleRoleDefault
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public virtual Module Module { get; set; }
    }
}