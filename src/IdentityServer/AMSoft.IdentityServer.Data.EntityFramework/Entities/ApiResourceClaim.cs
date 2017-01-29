namespace AMSoft.IdentityServer.Data.EntityFramework.Entities
{
    public class ApiResourceClaim : UserClaim
    {
        public ApiResource ApiResource { get; set; }
    }
}