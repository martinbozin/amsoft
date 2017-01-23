namespace IdentityServer4.EntityFramework.Entities
{
    public class ClientSecret : Secret
    {
        public Client Client { get; set; }
    }
}