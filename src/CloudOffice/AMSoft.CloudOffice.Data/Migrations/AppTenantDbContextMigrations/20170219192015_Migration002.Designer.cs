﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Domain.Core;

namespace AMSoft.CloudOffice.Data.Migrations.AppTenantDbContextMigrations
{
    [DbContext(typeof(AppTenantDbContext))]
    [Migration("20170219192015_Migration002")]
    partial class Migration002
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

                    b.Property<Guid?>("TenantModuleRoleId");

                    b.HasKey("Id");

                    b.HasIndex("TenantModuleId");

                    b.HasIndex("TenantModuleRoleId");

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

                    b.Property<byte[]>("Version");

                    b.HasKey("Id");

                    b.ToTable("TenantModuleRoles","dbo");
                });

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.TenantModels.TenantModuleUserRole", b =>
                {
                    b.Property<Guid>("TenantUserId");

                    b.Property<Guid>("TenantModuleRoleId");

                    b.HasKey("TenantUserId", "TenantModuleRoleId");

                    b.HasIndex("TenantModuleRoleId");

                    b.ToTable("TenantUser2TenantModuleRole","dbo");
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

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.TenantModels.TenantModulePermission", b =>
                {
                    b.HasOne("AMSoft.CloudOffice.Domain.TenantModels.TenantModule", "TenantModule")
                        .WithMany("TenantModulePermissions")
                        .HasForeignKey("TenantModuleId");

                    b.HasOne("AMSoft.CloudOffice.Domain.TenantModels.TenantModuleRole")
                        .WithMany("Permissions")
                        .HasForeignKey("TenantModuleRoleId");
                });

            modelBuilder.Entity("AMSoft.CloudOffice.Domain.TenantModels.TenantModuleUserRole", b =>
                {
                    b.HasOne("AMSoft.CloudOffice.Domain.TenantModels.TenantModuleRole", "TenantModuleRole")
                        .WithMany("TenantModuleUserRoles")
                        .HasForeignKey("TenantModuleRoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("AMSoft.CloudOffice.Domain.TenantModels.TenantUser", "TenantUser")
                        .WithMany("TenantModuleUserRoles")
                        .HasForeignKey("TenantUserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}