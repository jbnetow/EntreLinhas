using EntreLinhas.Api.Models;

namespace EntreLinhas.Api.Services;

// Resposta provisória para validar o fluxo mobile -> API.
// Não interpreta o conteúdo real. Será substituída pelo serviço de IA.
public sealed class DemoAnalysisService : IAnalysisService
{
    public Task<AnalysisResponse> AnalyzeAsync(string text, string? fileName, CancellationToken cancellationToken)
    {
        var hasText = !string.IsNullOrWhiteSpace(text);
        var result = new AnalysisResponse(
            Title: fileName ?? "Texto enviado",
            Summary: hasText
                ? "A API recebeu seu texto. A análise inteligente real será habilitada na próxima etapa."
                : "O arquivo foi recebido, mas a extração do conteúdo ainda será implementada.",
            SimplifiedExplanation: "Esta é uma resposta de demonstração para testar a comunicação entre o aplicativo e o servidor. Ela ainda não representa uma interpretação do documento.",
            KeyPoints: new[] { "O envio chegou ao backend.", "A análise real por IA ainda não está conectada." },
            Deadlines: Array.Empty<string>(),
            Obligations: Array.Empty<string>(),
            Disclaimer: "Demonstração técnica: não use este resultado para tomar decisões. A interpretação real será implementada antes da entrega."
        );
        return Task.FromResult(result);
    }
}
