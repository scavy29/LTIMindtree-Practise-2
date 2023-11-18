using Microsoft.EntityFrameworkCore;
using Movie_AppWeb.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//Add DI
builder.Services.AddDbContext<MovieDbContext>(options=>{
    options.UseSqlServer(builder.Configuration.GetConnectionString("MyCon"));
});

// builder.Services.AddCors(
//     options=>
//     {
//         options.AddDefaultPolicy(builder=>
//         {
//          builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
//     });
// });

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();




var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting(); //add

app.UseCors();   // add

app.UseAuthorization();

app.MapControllers();

app.Run();
