using PaymentAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<PaymentDetailContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// builder.Services.AddCors(options=>
// options.WithOrigins("https://8081-bdedfececadfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/")
// .AllowAnyMethod()
// .AllowAnyHeader());

// builder.Services.AddCors(
//     options =>
//     {
//         options.AddDefaultPolicy(builder =>
//         {
//             builder
//             .AllowAnyHeader()
//             .AllowAnyMethod()
//             .AllowAnyOrigin();
//         });
//     });

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
