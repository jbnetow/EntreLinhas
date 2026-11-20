namespace EntreLinhas.Api.Models;

public sealed record AnalysisResponse(
    string Title,
    string Summary,
    string SimplifiedExplanation,
    IReadOnlyList<string> KeyPoints,
    IReadOnlyList<string> Deadlines,
    IReadOnlyList<string> Obligations,
    string Disclaimer
);
