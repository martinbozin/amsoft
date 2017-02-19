using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using AMSoft.CloudOffice.Data;

namespace AMSoft.CloudOffice.Data.Migrations.CloudOfficeDbContextMigrations
{
    [DbContext(typeof(CloudOfficeDbContext))]
    partial class CloudOfficeDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.Core.AppTenant", b =>
                {
                    b.Property<int>("AppTenantId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConnectionString");

                    b.Property<string>("Hostname");

                    b.Property<string>("Name");

                    b.Property<string>("Theme");

                    b.HasKey("AppTenantId");

                    b.ToTable("AppTenants","dbo");
                });

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.Core.Module", b =>
                {
                    b.Property<int>("ModuleId")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AppTenantId");

                    b.Property<int?>("ModuleCategoryId");

                    b.Property<string>("Name");

                    b.HasKey("ModuleId");

                    b.HasIndex("AppTenantId");

                    b.HasIndex("ModuleCategoryId");

                    b.ToTable("Modules","dbo");
                });

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.Core.ModuleCategory", b =>
                {
                    b.Property<int>("ModuleCategoryId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("ModuleCategoryId");

                    b.ToTable("ModuleCategories","dbo");
                });

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.Core.ModuleRoleDefault", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<int?>("ModuleId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("ModuleId");

                    b.ToTable("ModuleRoleDefaults","dbo");
                });

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.Core.Module", b =>
                {
                    b.HasOne("AMSoft.CloudOffice.Domain.Core.AppTenant", "AppTenant")
                        .WithMany("Modules")
                        .HasForeignKey("AppTenantId");

                    b.HasOne("AMSoft.CloudOffice.Domain.Core.ModuleCategory", "ModuleCategory")
                        .WithMany("Modules")
                        .HasForeignKey("ModuleCategoryId");
                });

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.Core.ModuleRoleDefault", b =>
                {
                    b.HasOne("AMSoft.CloudOffice.Domain.Core.Module", "Module")
                        .WithMany("ModuleRoleDefaults")
                        .HasForeignKey("ModuleId");
                });
        }
    }
}
