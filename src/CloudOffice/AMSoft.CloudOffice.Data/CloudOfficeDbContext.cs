using AMSoft.CloudOffice.Domain.CoreModels;
using Microsoft.EntityFrameworkCore;

namespace AMSoft.CloudOffice.Data
{
    public class CloudOfficeDbContext : DbContext
    {
        //public CloudOfficeDbContext(DbContextOptions<CloudOfficeDbContext> options)
        //    : base(options)
        //{ }

        public DbSet<AppTenant> AppTenants { get; set; }
        public DbSet<Module> Modules { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AppTenant>().ToTable("AppTenants", "dbo");
            modelBuilder.Entity<AppTenant>().HasKey("AppTenantId");
            modelBuilder.Entity<AppTenant>().Property("Name");
            modelBuilder.Entity<AppTenant>().Property("Hostname");
            modelBuilder.Entity<AppTenant>().Property("Theme");
            modelBuilder.Entity<AppTenant>().Property("ConnectionString");
            modelBuilder.Entity<AppTenant>().Ignore(e => e.Hostnames);

            modelBuilder.Entity<Module>().ToTable("Modules", "dbo");
            modelBuilder.Entity<Module>().HasKey("ModuleId");
            modelBuilder.Entity<Module>().Property("Name");
            modelBuilder.Entity<Module>().HasOne(p => p.AppTenant).WithMany(b => b.Modules);
            modelBuilder.Entity<Module>().HasOne(p => p.Category).WithMany(b => b.Modules);

            modelBuilder.Entity<Category>().ToTable("Categories", "dbo");
            modelBuilder.Entity<Category>().HasKey("CategoryId");
            modelBuilder.Entity<Category>().Property("Name");

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=amsoft.database.windows.net;Database=AMSoft.CloudOffice;User Id=amsoftadmin;Password=P@ssw0rd123!;");
        }
    }
}