﻿namespace AMSoft.IdentityServer.Data.EntityFramework.Entities
{
    public class ClientCorsOrigin
    {
        public int Id { get; set; }
        public string Origin { get; set; }
        public Client Client { get; set; }
    }
}