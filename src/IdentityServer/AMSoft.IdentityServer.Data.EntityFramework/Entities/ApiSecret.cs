using System;
using static IdentityServer4.IdentityServerConstants;

namespace IdentityServer4.EntityFramework.Entities
{
    public class ApiSecret : Secret
    {
        public ApiResource ApiResource { get; set; }
    }
}