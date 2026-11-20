using EntreLinhas.Api.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy => policy
        .AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod());
});
builder.Services.AddScoped<IAnalysisService, DemoAnalysisService>();

var app = builder.Build();
app.UseCors();
app.UseSwagger();
app.UseSwaggerUI();

app.MapGet("/", () => Results.Ok(new { name = "EntreLinhas API", status = "running" }));

app.MapPost("/api/analyses", async (HttpRequest request, IAnalysisService analyzer, CancellationToken ct) =>
{
    if (!request.HasFormContentType)
        return Results.BadRequest("Envie os dados como multipart/form-data.");

    var form = await request.ReadFormAsync(ct);
    var text = form["text"].ToString();
    var file = form.Files.GetFile("file");

    if (string.IsNullOrWhiteSpace(text) && file is null)
        return Results.BadRequest("Envie um texto ou documento.");

    // Limite inicial para evitar uploads excessivos. Ajustar após definir requisitos.
    if (file is not null && file.Length > 10 * 1024 * 1024)
        return Results.BadRequest("O arquivo deve ter no máximo 10 MB.");

    // Nesta primeira etapa, o serviço demonstra o contrato da análise.
    // A extração de PDF/OCR e a integração real com IA serão implementadas em seguida.
    var result = await analyzer.AnalyzeAsync(text, file?.FileName, ct);
    return Results.Ok(result);
})
.DisableAntiforgery();

app.Run();
