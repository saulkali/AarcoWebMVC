
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();


Action AddRoutings = () =>
{
    app.MapControllerRoute(
    name: "Marcas",
    pattern: "{controller=Marcas}/{action=Index}"
    );
};


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
}
app.UseStaticFiles();

app.UseRouting();
AddRoutings();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
