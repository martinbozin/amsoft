namespace AMSoft.IdentityServer.Data.EntityFramework.Options
{
    public class TokenCleanupOptions
    {
        public int Interval { get; set; } = 60;
    }
}