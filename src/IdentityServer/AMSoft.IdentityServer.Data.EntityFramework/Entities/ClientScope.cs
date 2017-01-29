namespace AMSoft.IdentityServer.Data.EntityFramework.Entities
{
    public class ClientScope
    {
        public int Id { get; set; }
        public string Scope { get; set; }
        public Client Client { get; set; }
    }
}