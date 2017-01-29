namespace AMSoft.IdentityServer.Data.EntityFramework.Entities
{
    public class ApiSecret : Secret
    {
        public ApiResource ApiResource { get; set; }
    }
}