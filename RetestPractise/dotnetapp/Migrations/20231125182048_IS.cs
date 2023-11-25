using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetapp.Migrations
{
    public partial class IS : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LaundryStatuses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LaundryStatuses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Packages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PricePerKg = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ClothesPerMonth = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Packages", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserSchedules",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MobileNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Area = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Pincode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PickupDay = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PickupTimeSlot = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PackageId = table.Column<int>(type: "int", nullable: false),
                    StatusId = table.Column<int>(type: "int", nullable: false),
                    ExpectedDeliveryDate = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserSchedules", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserSchedules_LaundryStatuses_StatusId",
                        column: x => x.StatusId,
                        principalTable: "LaundryStatuses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserSchedules_Packages_PackageId",
                        column: x => x.PackageId,
                        principalTable: "Packages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "LaundryStatuses",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Scheduled" },
                    { 2, "PickedUp" },
                    { 3, "UnderLaundry" },
                    { 4, "QualityCheck" },
                    { 5, "Delivered" }
                });

            migrationBuilder.InsertData(
                table: "Packages",
                columns: new[] { "Id", "ClothesPerMonth", "Description", "Name", "PricePerKg" },
                values: new object[,]
                {
                    { 1, 70, "Per/kg", "Wash & Fold", 5.0m },
                    { 2, 65, "Per/kg", "Wash & Iron", 7.0m },
                    { 3, 60, "60 Clothes /month", "Individual Package", 4.0m },
                    { 4, 110, "110 Clothes /month", "Family Package", 10.0m },
                    { 5, 80, "Per cloth", "Pay Per Cloth", 11.5m },
                    { 6, 45, "Per saree", "Saree Polishing", 9.0m },
                    { 7, 50, "Per/kg", "DryCleaning", 8.0m },
                    { 8, 50, "Per/kg", "Premium Laundry", 10.0m }
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserSchedules_PackageId",
                table: "UserSchedules",
                column: "PackageId");

            migrationBuilder.CreateIndex(
                name: "IX_UserSchedules_StatusId",
                table: "UserSchedules",
                column: "StatusId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserSchedules");

            migrationBuilder.DropTable(
                name: "LaundryStatuses");

            migrationBuilder.DropTable(
                name: "Packages");
        }
    }
}
