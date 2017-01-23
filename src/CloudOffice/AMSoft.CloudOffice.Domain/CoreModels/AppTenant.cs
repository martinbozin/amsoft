﻿using System.Collections.ObjectModel;

namespace AMSoft.CloudOffice.Domain.CoreModels
{
    public class AppTenant
    {
        public int AppTenantId { get; set; }
        public string Name { get; set; }
        public string Hostname { get; set; }
        public string[] Hostnames { get; set; }
        public string ConnectionString { get; set; }
    }
}