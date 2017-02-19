using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AMSoft.CloudOffice.Data.Migrations.AppTenantDbContextMigrations
{
    public partial class Migration001 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "dbo");

            migrationBuilder.CreateTable(
                name: "TenantModules",
                schema: "dbo",
                columns: table => new
                {
                    TenantModuleId = table.Column<Guid>(nullable: false),
                    ActivatedBy = table.Column<DateTime>(nullable: true),
                    ActivationDate = table.Column<DateTime>(nullable: true),
                    AppModuleId = table.Column<int>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    LicenseType = table.Column<int>(nullable: false),
                    ModifiedBy = table.Column<string>(nullable: true),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    AppModuleName = table.Column<string>(nullable: true),
                    Version = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TenantModules", x => x.TenantModuleId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TenantModules",
                schema: "dbo");
        }
    }
}
