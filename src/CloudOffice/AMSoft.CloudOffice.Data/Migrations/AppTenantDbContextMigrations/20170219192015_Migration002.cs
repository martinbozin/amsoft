using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AMSoft.CloudOffice.Data.Migrations.AppTenantDbContextMigrations
{
    public partial class Migration002 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TenantModuleRoles",
                schema: "dbo",
                columns: table => new
                {
                    TenantModuleRoleId = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    ModifiedBy = table.Column<string>(nullable: true),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Version = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TenantModuleRoles", x => x.TenantModuleRoleId);
                });

            migrationBuilder.CreateTable(
                name: "TenantUsers",
                schema: "dbo",
                columns: table => new
                {
                    TenantUserId = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    Email = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    FullName = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    LastName = table.Column<string>(nullable: true),
                    ModifiedBy = table.Column<string>(nullable: true),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    Version = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TenantUsers", x => x.TenantUserId);
                });

            migrationBuilder.CreateTable(
                name: "TenantModulePermissions",
                schema: "dbo",
                columns: table => new
                {
                    TenantModulePermissionId = table.Column<Guid>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    TenantModuleId = table.Column<Guid>(nullable: true),
                    TenantModuleRoleId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TenantModulePermissions", x => x.TenantModulePermissionId);
                    table.ForeignKey(
                        name: "FK_TenantModulePermissions_TenantModules_TenantModuleId",
                        column: x => x.TenantModuleId,
                        principalSchema: "dbo",
                        principalTable: "TenantModules",
                        principalColumn: "TenantModuleId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_TenantModulePermissions_TenantModuleRoles_TenantModuleRoleId",
                        column: x => x.TenantModuleRoleId,
                        principalSchema: "dbo",
                        principalTable: "TenantModuleRoles",
                        principalColumn: "TenantModuleRoleId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "TenantUser2TenantModuleRole",
                schema: "dbo",
                columns: table => new
                {
                    TenantUserId = table.Column<Guid>(nullable: false),
                    TenantModuleRoleId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TenantUser2TenantModuleRole", x => new { x.TenantUserId, x.TenantModuleRoleId });
                    table.ForeignKey(
                        name: "FK_TenantUser2TenantModuleRole_TenantModuleRoles_TenantModuleRoleId",
                        column: x => x.TenantModuleRoleId,
                        principalSchema: "dbo",
                        principalTable: "TenantModuleRoles",
                        principalColumn: "TenantModuleRoleId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TenantUser2TenantModuleRole_TenantUsers_TenantUserId",
                        column: x => x.TenantUserId,
                        principalSchema: "dbo",
                        principalTable: "TenantUsers",
                        principalColumn: "TenantUserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TenantModulePermissions_TenantModuleId",
                schema: "dbo",
                table: "TenantModulePermissions",
                column: "TenantModuleId");

            migrationBuilder.CreateIndex(
                name: "IX_TenantModulePermissions_TenantModuleRoleId",
                schema: "dbo",
                table: "TenantModulePermissions",
                column: "TenantModuleRoleId");

            migrationBuilder.CreateIndex(
                name: "IX_TenantUser2TenantModuleRole_TenantModuleRoleId",
                schema: "dbo",
                table: "TenantUser2TenantModuleRole",
                column: "TenantModuleRoleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TenantModulePermissions",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "TenantUser2TenantModuleRole",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "TenantModuleRoles",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "TenantUsers",
                schema: "dbo");
        }
    }
}
