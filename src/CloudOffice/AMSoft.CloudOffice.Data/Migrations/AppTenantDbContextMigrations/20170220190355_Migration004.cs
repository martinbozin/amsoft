using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AMSoft.CloudOffice.Data.Migrations.AppTenantDbContextMigrations
{
    public partial class Migration004 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Mobile",
                schema: "dbo",
                table: "TenantUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Phone",
                schema: "dbo",
                table: "TenantUsers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Mobile",
                schema: "dbo",
                table: "TenantUsers");

            migrationBuilder.DropColumn(
                name: "Phone",
                schema: "dbo",
                table: "TenantUsers");
        }
    }
}
