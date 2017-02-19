using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AMSoft.CloudOffice.Data.Migrations.AppTenantDbContextMigrations
{
    public partial class Migration003 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TenantModulePermissions_TenantModuleRoles_TenantModuleRoleId",
                schema: "dbo",
                table: "TenantModulePermissions");

            migrationBuilder.DropIndex(
                name: "IX_TenantModulePermissions_TenantModuleRoleId",
                schema: "dbo",
                table: "TenantModulePermissions");

            migrationBuilder.DropColumn(
                name: "TenantModuleRoleId",
                schema: "dbo",
                table: "TenantModulePermissions");

            migrationBuilder.AddColumn<Guid>(
                name: "TenantModuleId",
                schema: "dbo",
                table: "TenantModuleRoles",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "TenantModuleRole2TenantModulePermission",
                schema: "dbo",
                columns: table => new
                {
                    TenantModuleRoleId = table.Column<Guid>(nullable: false),
                    TenantModulePermissionId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TenantModuleRole2TenantModulePermission", x => new { x.TenantModuleRoleId, x.TenantModulePermissionId });
                    table.ForeignKey(
                        name: "FK_TenantModuleRole2TenantModulePermission_TenantModulePermissions_TenantModulePermissionId",
                        column: x => x.TenantModulePermissionId,
                        principalSchema: "dbo",
                        principalTable: "TenantModulePermissions",
                        principalColumn: "TenantModulePermissionId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TenantModuleRole2TenantModulePermission_TenantModuleRoles_TenantModuleRoleId",
                        column: x => x.TenantModuleRoleId,
                        principalSchema: "dbo",
                        principalTable: "TenantModuleRoles",
                        principalColumn: "TenantModuleRoleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TenantModuleRoles_TenantModuleId",
                schema: "dbo",
                table: "TenantModuleRoles",
                column: "TenantModuleId");

            migrationBuilder.CreateIndex(
                name: "IX_TenantModuleRole2TenantModulePermission_TenantModulePermissionId",
                schema: "dbo",
                table: "TenantModuleRole2TenantModulePermission",
                column: "TenantModulePermissionId");

            migrationBuilder.AddForeignKey(
                name: "FK_TenantModuleRoles_TenantModules_TenantModuleId",
                schema: "dbo",
                table: "TenantModuleRoles",
                column: "TenantModuleId",
                principalSchema: "dbo",
                principalTable: "TenantModules",
                principalColumn: "TenantModuleId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TenantModuleRoles_TenantModules_TenantModuleId",
                schema: "dbo",
                table: "TenantModuleRoles");

            migrationBuilder.DropTable(
                name: "TenantModuleRole2TenantModulePermission",
                schema: "dbo");

            migrationBuilder.DropIndex(
                name: "IX_TenantModuleRoles_TenantModuleId",
                schema: "dbo",
                table: "TenantModuleRoles");

            migrationBuilder.DropColumn(
                name: "TenantModuleId",
                schema: "dbo",
                table: "TenantModuleRoles");

            migrationBuilder.AddColumn<Guid>(
                name: "TenantModuleRoleId",
                schema: "dbo",
                table: "TenantModulePermissions",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TenantModulePermissions_TenantModuleRoleId",
                schema: "dbo",
                table: "TenantModulePermissions",
                column: "TenantModuleRoleId");

            migrationBuilder.AddForeignKey(
                name: "FK_TenantModulePermissions_TenantModuleRoles_TenantModuleRoleId",
                schema: "dbo",
                table: "TenantModulePermissions",
                column: "TenantModuleRoleId",
                principalSchema: "dbo",
                principalTable: "TenantModuleRoles",
                principalColumn: "TenantModuleRoleId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
