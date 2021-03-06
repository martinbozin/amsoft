﻿using System.Collections.Generic;

namespace AMSoft.CloudOffice.Domain.Core
{
    public class AppTenant
    {
        public int AppTenantId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Hostname { get; set; }
        public string[] Hostnames { get; set; }
        public string Theme { get; set; }
        public string ConnectionString { get; set; }
        public virtual List<Module> Modules { get; set; }
    }
}
