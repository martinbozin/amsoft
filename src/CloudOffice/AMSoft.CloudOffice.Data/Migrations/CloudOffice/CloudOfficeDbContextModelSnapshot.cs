using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using AMSoft.CloudOffice.Data;

namespace AMSoft.CloudOffice.Data.Migrations.CloudOffice
{
    [DbContext(typeof(CloudOfficeDbContext))]
    partial class CloudOfficeDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.2.0-preview1-22878")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.AppTenant", b =>
                {
                    b.Property<int>("AppTenantId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Hostname");

                    b.Property<string>("Name");

                    b.HasKey("AppTenantId");

                    b.ToTable("AppTenants","dbo");
                });
        }
    }
}
