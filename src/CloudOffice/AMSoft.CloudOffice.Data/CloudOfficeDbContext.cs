using AMSoft.CloudOffice.Domain;
using Microsoft.EntityFrameworkCore;

namespace AMSoft.CloudOffice.Data
{
    public class CloudOfficeDbContext : DbContext
    {
        //public CloudOfficeDbContext(DbContextOptions<CloudOfficeDbContext> options)
        //    : base(options)
        //{ }

        public DbSet<AppTenant> AppTenants { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AppTenant>().ToTable("AppTenants", "dbo");
            modelBuilder.Entity<AppTenant>().HasKey("AppTenantId");
            modelBuilder.Entity<AppTenant>().Property("Name");
            modelBuilder.Entity<AppTenant>().Property("Hostname");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-N6F8S1N\SQLEXPRESS;Database=AMSoft.CloudOffice;Trusted_Connection=True;");
        }
    }
}