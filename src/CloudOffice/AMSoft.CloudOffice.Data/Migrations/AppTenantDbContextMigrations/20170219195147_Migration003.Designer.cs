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
    [Migration("20170219195147_Migration003")]
    partial class Migration003
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

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.TenantModels.TenantModulePermission", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("TenantModulePermissionId");

                    b.Property<string>("Description")
                        .HasColumnName("Description");

                    b.Property<string>("Name")
                        .HasColumnName("Name");

                    b.Property<Guid?>("TenantModuleId");

                    b.HasKey("Id");

                    b.HasIndex("TenantModuleId");

                    b.ToTable("TenantModulePermissions","dbo");
                });

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.TenantModels.TenantModuleRole", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("TenantModuleRoleId");

                    b.Property<string>("CreatedBy")
                        .HasColumnName("CreatedBy");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnName("CreatedDate");

                    b.Property<string>("Description")
                        .HasColumnName("Description");

                    b.Property<string>("ModifiedBy")
                        .HasColumnName("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate")
                        .HasColumnName("ModifiedDate");

                    b.Property<string>("Name")
                        .HasColumnName("Name");

                    b.Property<Guid?>("TenantModuleId");

                    b.Property<byte[]>("Version");

                    b.HasKey("Id");

                    b.HasIndex("TenantModuleId");

                    b.ToTable("TenantModuleRoles","dbo");
                });

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.TenantModels.TenantModuleRole2TenantModulePermission", b =>
                {
                    b.Property<Guid>("TenantModuleRoleId");

                    b.Property<Guid>("TenantModulePermissionId");

                    b.HasKey("TenantModuleRoleId", "TenantModulePermissionId");

                    b.HasIndex("TenantModulePermissionId");

                    b.ToTable("TenantModuleRole2TenantModulePermission","dbo");
                });

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.TenantModels.TenantUser", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("TenantUserId");

                    b.Property<string>("CreatedBy")
                        .HasColumnName("CreatedBy");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnName("CreatedDate");

                    b.Property<string>("Email")
                        .HasColumnName("Email");

                    b.Property<string>("FirstName")
                        .HasColumnName("FirstName");

                    b.Property<string>("FullName")
                        .HasColumnName("FullName");

                    b.Property<bool>("IsActive")
                        .HasColumnName("IsActive");

                    b.Property<string>("LastName")
                        .HasColumnName("LastName");

                    b.Property<string>("ModifiedBy")
                        .HasColumnName("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate")
                        .HasColumnName("ModifiedDate");

                    b.Property<byte[]>("Version");

                    b.HasKey("Id");

                    b.ToTable("TenantUsers","dbo");
                });

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.TenantModels.TenantUser2TenantModuleRole", b =>
                {
                    b.Property<Guid>("TenantUserId");

                    b.Property<Guid>("TenantModuleRoleId");

                    b.HasKey("TenantUserId", "TenantModuleRoleId");

                    b.HasIndex("TenantModuleRoleId");

                    b.ToTable("TenantUser2TenantModuleRole","dbo");
                });

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.TenantModels.TenantModulePermission", b =>
                {
                    b.HasOne("AMSoft.CloudOffice.Domain.TenantModels.TenantModule", "TenantModule")
                        .WithMany("AllowedModulePermissions")
                        .HasForeignKey("TenantModuleId");
                });

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.TenantModels.TenantModuleRole", b =>
                {
                    b.HasOne("AMSoft.CloudOffice.Domain.TenantModels.TenantModule", "TenantModule")
                        .WithMany("TenantModuleRoles")
                        .HasForeignKey("TenantModuleId");
                });

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.TenantModels.TenantModuleRole2TenantModulePermission", b =>
                {
                    b.HasOne("AMSoft.CloudOffice.Domain.TenantModels.TenantModulePermission", "TenantModulePermission")
                        .WithMany("TenantModuleRole2TenantModulePermission")
                        .HasForeignKey("TenantModulePermissionId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("AMSoft.CloudOffice.Domain.TenantModels.TenantModuleRole", "TenantModuleRole")
                        .WithMany("TenantModulePermissions")
                        .HasForeignKey("TenantModuleRoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.TenantModels.TenantUser2TenantModuleRole", b =>
                {
                    b.HasOne("AMSoft.CloudOffice.Domain.TenantModels.TenantModuleRole", "TenantModuleRole")
                        .WithMany("TenantUser2TenantModuleRoles")
                        .HasForeignKey("TenantModuleRoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("AMSoft.CloudOffice.Domain.TenantModels.TenantUser", "TenantUser")
                        .WithMany("TenantUser2TenantModuleRoles")
                        .HasForeignKey("TenantUserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
