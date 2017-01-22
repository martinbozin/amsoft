using AMSoft.CloudOffice.Domain;
using AMSoft.CloudOffice.Domain.CoreModels;
using Microsoft.EntityFrameworkCore;

namespace AMSoft.CloudOffice.Data
{
    public class SqlServerApplicationDbContext : DbContext
    {
        private readonly AppTenant tenant;

        public SqlServerApplicationDbContext(AppTenant tenant)

        {
            this.tenant = tenant;
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(tenant.ConnectionString);
            base.OnConfiguring(optionsBuilder);
        }
    }
}
