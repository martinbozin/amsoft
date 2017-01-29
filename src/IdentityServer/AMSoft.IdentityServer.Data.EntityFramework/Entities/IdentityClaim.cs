namespace AMSoft.IdentityServer.Data.EntityFramework.Entities
{
    public class IdentityClaim : UserClaim
    {
        public IdentityResource IdentityResource { get; set; }
    }
}