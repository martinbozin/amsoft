namespace AMSoft.IdentityServer.Data.EntityFramework.Entities
{
    public class ClientSecret : Secret
    {
        public Client Client { get; set; }
    }
}