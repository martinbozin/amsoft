namespace AMSoft.IdentityServer.Data.EntityFramework.Entities
{
    public class ApiScopeClaim : UserClaim
    {
        public ApiScope ApiScope { get; set; }
    }
}