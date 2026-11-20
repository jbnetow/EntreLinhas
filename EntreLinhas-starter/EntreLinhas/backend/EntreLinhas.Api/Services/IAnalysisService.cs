using EntreLinhas.Api.Models;

namespace EntreLinhas.Api.Services;

public interface IAnalysisService
{
    Task<AnalysisResponse> AnalyzeAsync(string text, string? fileName, CancellationToken cancellationToken);
}
