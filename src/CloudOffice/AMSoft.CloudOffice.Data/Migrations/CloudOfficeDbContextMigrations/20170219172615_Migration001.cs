using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AMSoft.CloudOffice.Data.Migrations.CloudOfficeDbContextMigrations
{
    public partial class Migration001 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "dbo");

            migrationBuilder.CreateTable(
                name: "AppTenants",
                schema: "dbo",
                columns: table => new
                {
                    AppTenantId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ConnectionString = table.Column<string>(nullable: true),
                    Hostname = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Theme = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppTenants", x => x.AppTenantId);
                });

            migrationBuilder.CreateTable(
                name: "ModuleCategories",
                schema: "dbo",
                columns: table => new
                {
                    ModuleCategoryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModuleCategories", x => x.ModuleCategoryId);
                });

            migrationBuilder.CreateTable(
                name: "Modules",
                schema: "dbo",
                columns: table => new
                {
                    ModuleId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AppTenantId = table.Column<int>(nullable: true),
                    ModuleCategoryId = table.Column<int>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Modules", x => x.ModuleId);
                    table.ForeignKey(
                        name: "FK_Modules_AppTenants_AppTenantId",
                        column: x => x.AppTenantId,
                        principalSchema: "dbo",
                        principalTable: "AppTenants",
                        principalColumn: "AppTenantId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Modules_ModuleCategories_ModuleCategoryId",
                        column: x => x.ModuleCategoryId,
                        principalSchema: "dbo",
                        principalTable: "ModuleCategories",
                        principalColumn: "ModuleCategoryId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ModuleRoleDefaults",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true),
                    ModuleId = table.Column<int>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModuleRoleDefaults", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ModuleRoleDefaults_Modules_ModuleId",
                        column: x => x.ModuleId,
                        principalSchema: "dbo",
                        principalTable: "Modules",
                        principalColumn: "ModuleId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Modules_AppTenantId",
                schema: "dbo",
                table: "Modules",
                column: "AppTenantId");

            migrationBuilder.CreateIndex(
                name: "IX_Modules_ModuleCategoryId",
                schema: "dbo",
                table: "Modules",
                column: "ModuleCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_ModuleRoleDefaults_ModuleId",
                schema: "dbo",
                table: "ModuleRoleDefaults",
                column: "ModuleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ModuleRoleDefaults",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "Modules",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "AppTenants",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "ModuleCategories",
                schema: "dbo");
        }
    }
}
