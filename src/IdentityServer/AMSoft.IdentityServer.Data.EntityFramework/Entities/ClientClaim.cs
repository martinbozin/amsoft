namespace AMSoft.IdentityServer.Data.EntityFramework.Entities
{
    public class ClientClaim
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Value { get; set; }
        public Client Client { get; set; }
    }
}