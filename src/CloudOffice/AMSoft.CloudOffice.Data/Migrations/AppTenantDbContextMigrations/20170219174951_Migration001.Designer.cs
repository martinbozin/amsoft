using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Domain.Core;

namespace AMSoft.CloudOffice.Data.Migrations.AppTenantDbContextMigrations
{
    [DbContext(typeof(AppTenantDbContext))]
    [Migration("20170219174951_Migration001")]
    partial class Migration001
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.TenantModels.TenantModule", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("TenantModuleId");

                    b.Property<DateTime?>("ActivatedBy")
                        .HasColumnName("ActivatedBy");

                    b.Property<DateTime?>("ActivationDate")
                        .HasColumnName("ActivationDate");

                    b.Property<int>("AppModuleId")
                        .HasColumnName("AppModuleId");

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnName("CreatedDate");

                    b.Property<DateTime?>("ExpirationDate")
                        .HasColumnName("ActivationDate");

                    b.Property<bool>("IsActive")
                        .HasColumnName("IsActive");

                    b.Property<int>("LicenseType")
                        .HasColumnName("LicenseType");

                    b.Property<string>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate")
                        .HasColumnName("ModifiedDate");

                    b.Property<string>("Name")
                        .HasColumnName("AppModuleName");

                    b.Property<byte[]>("Version");

                    b.HasKey("Id");

                    b.ToTable("TenantModules","dbo");
                });
        }
    }
}
