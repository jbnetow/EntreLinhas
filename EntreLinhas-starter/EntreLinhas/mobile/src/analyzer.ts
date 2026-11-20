
export type LegalTerm = {
  term: string;
  meaning: string;
};

export type Analysis = {
  title: string;
  summary: string;
  simplifiedExplanation: string;
  keyPoints: string[];
  deadlines: string[];
  obligations: string[];
  legalTerms: LegalTerm[];
  disclaimer: string;
};

type Rule = {
  pattern: RegExp;
  replacement: string;
};

const glossary: Array<LegalTerm & { pattern: RegExp }> = [
  {
    term: "Adimplemento",
    meaning: "Cumprimento de uma obrigação assumida.",
    pattern: /adimplemento/i,
  },
  {
    term: "Inadimplemento",
    meaning: "Não cumprimento de uma obrigação.",
    pattern: /inadimplemento/i,
  },
  {
    term: "Mora",
    meaning: "Atraso juridicamente relevante no cumprimento de uma obrigação.",
    pattern: /(?<![\p{L}])mora(?![\p{L}])/iu,
  },
  {
    term: "Cláusula penal moratória",
    meaning: "Multa contratual prevista para o caso de atraso.",
    pattern: /cláusula penal moratória/i,
  },
  {
    term: "Contraprestação pecuniária",
    meaning: "Pagamento em dinheiro devido como contrapartida.",
    pattern: /contraprestação pecuniária/i,
  },
  {
    term: "Anuência expressa",
    meaning: "Concordância manifestada de forma clara.",
    pattern: /anuência expressa/i,
  },
  {
    term: "Rescisão unilateral",
    meaning: "Encerramento de um contrato por iniciativa de uma das partes, quando permitido.",
    pattern: /rescisão unilateral/i,
  },
  {
    term: "Vigência",
    meaning: "Período em que o contrato ou regra está em vigor.",
    pattern: /vigência/i,
  },
  {
    term: "Interpelação extrajudicial",
    meaning: "Comunicação formal feita fora de um processo judicial.",
    pattern: /interpelação extrajudicial/i,
  },
  {
    term: "Interpelação judicial",
    meaning: "Comunicação ou exigência formal realizada por meio judicial.",
    pattern: /interpelação judicial/i,
  },
  {
    term: "Perdas e danos",
    meaning: "Prejuízos que podem gerar obrigação de indenizar.",
    pattern: /perdas e danos/i,
  },
  {
    term: "Novação",
    meaning: "Substituição de uma obrigação anterior por uma nova, quando presentes os requisitos legais.",
    pattern: /novação/i,
  },
  {
    term: "Foro",
    meaning: "Localidade ou órgão judicial relacionado à solução de uma disputa.",
    pattern: /(?<![\p{L}])foro(?![\p{L}])/iu,
  },
  {
    term: "Dirimir controvérsias",
    meaning: "Resolver conflitos ou divergências.",
    pattern: /dirimir (?:eventuais )?controvérsias/i,
  },
  {
    term: "Instrumento particular",
    meaning: "Documento elaborado pelas partes, sem necessariamente ser uma escritura pública.",
    pattern: /instrumento particular/i,
  },
  {
    term: "Ônus",
    meaning: "Encargo ou responsabilidade que pode produzir consequências jurídicas.",
    pattern: /ônus/i,
  },
  {
    term: "Boa-fé objetiva",
    meaning: "Dever de agir com honestidade, lealdade e cooperação nas relações jurídicas.",
    pattern: /boa-fé objetiva/i,
  },
  {
    term: "Probidade contratual",
    meaning: "Conduta honesta e correta durante a relação contratual.",
    pattern: /probidade contratual/i,
  },
  {
    term: "Cláusula penal",
    meaning: "Penalidade prevista no contrato para determinadas situações.",
    pattern: /cláusula penal/i,
  },
  {
    term: "Obrigação pecuniária",
    meaning: "Obrigação de pagar uma quantia em dinheiro.",
    pattern: /obrigação pecuniária/i,
  },
  {
    term: "Montante devido",
    meaning: "Valor que deve ser pago.",
    pattern: /montante devido/i,
  },
  {
    term: "Constituição em mora",
    meaning: "Caracterização formal ou legal da situação de atraso.",
    pattern: /constituição em mora/i,
  },
  {
    term: "Anuência",
    meaning: "Concordância ou autorização.",
    pattern: /anuência/i,
  },
  {
    term: "Inobservância",
    meaning: "Não cumprimento de uma regra ou obrigação.",
    pattern: /inobservância/i,
  },
  {
    term: "Litígio",
    meaning: "Conflito ou disputa jurídica.",
    pattern: /litígio/i,
  },
  {
    term: "Outorgante",
    meaning: "Pessoa que concede um direito ou poder a outra.",
    pattern: /outorgante/i,
  },
  {
    term: "Outorgado",
    meaning: "Pessoa que recebe um direito ou poder de outra.",
    pattern: /outorgado/i,
  },
  {
    term: "Dolo",
    meaning: "Conduta intencional, cujo significado jurídico depende do contexto.",
    pattern: /(?<![\p{L}])dolo(?![\p{L}])/iu,
  },
  {
    term: "Culpa",
    meaning: "Responsabilidade associada, em certos contextos, a negligência, imprudência ou imperícia.",
    pattern: /(?<![\p{L}])culpa(?![\p{L}])/iu,
  },
  {
    term: "Prescrição",
    meaning: "Perda da possibilidade de exigir judicialmente uma pretensão em razão do tempo, conforme a lei.",
    pattern: /prescrição/i,
  },
  {
    term: "Decadência",
    meaning: "Extinção de um direito pelo decurso do prazo previsto.",
    pattern: /decadência/i,
  },
  {
    term: "Ressalvadas",
    meaning: "Com exceção das situações mencionadas.",
    pattern: /ressalvad[oa]s?/i,
  },
];

const phraseRules: Rule[] = [
  {
    pattern:
      /o inadimplemento da obrigação pecuniária ensejará a incidência de cláusula penal moratória correspondente a/gi,
    replacement:
      "se a obrigação de pagar não for cumprida, será aplicada uma multa por atraso de",
  },
  {
    pattern:
      /a inobservância das obrigações contratuais poderá ensejar a rescisão unilateral do instrumento/gi,
    replacement:
      "o não cumprimento das obrigações do contrato poderá permitir que uma das partes encerre o contrato",
  },
  {
    pattern:
      /as partes elegem o foro da comarca de/gi,
    replacement:
      "as partes escolhem a Justiça da comarca de",
  },
  {
    pattern:
      /para dirimir eventuais controvérsias oriundas deste instrumento/gi,
    replacement:
      "para resolver possíveis conflitos relacionados a este documento",
  },
  {
    pattern:
      /sem prejuízo da apuração de eventuais perdas e danos/gi,
    replacement:
      "sem impedir a avaliação de possíveis prejuízos e indenizações",
  },
  {
    pattern:
      /sob pena de constituição em mora/gi,
    replacement:
      "com possibilidade de ficar em situação de atraso",
  },
  {
    pattern:
      /independentemente de interpelação judicial ou extrajudicial/gi,
    replacement:
      "sem necessidade de uma notificação formal judicial ou extrajudicial",
  },
  {
    pattern:
      /eventual tolerância quanto ao descumprimento de quaisquer disposições não importará em novação ou renúncia de direitos/gi,
    replacement:
      "aceitar temporariamente o não cumprimento de alguma regra não significa substituir obrigações nem abrir mão de direitos",
  },
];

const wordRules: Rule[] = [
  { pattern: /fica estabelecido que/gi, replacement: "foi definido que" },
  { pattern: /o presente instrumento particular/gi, replacement: "este documento particular" },
  { pattern: /o presente ajuste/gi, replacement: "este acordo" },
  { pattern: /fiel cumprimento/gi, replacement: "cumprimento" },
  { pattern: /disposições pactuadas/gi, replacement: "regras combinadas" },
  { pattern: /observados os princípios/gi, replacement: "respeitando os princípios" },
  { pattern: /contraprestação pecuniária/gi, replacement: "pagamento em dinheiro" },
  { pattern: /obrigação pecuniária/gi, replacement: "obrigação de pagar" },
  { pattern: /cláusula penal moratória/gi, replacement: "multa contratual por atraso" },
  { pattern: /cláusula penal/gi, replacement: "multa prevista no contrato" },
  { pattern: /montante devido/gi, replacement: "valor que deve ser pago" },
  { pattern: /no importe de/gi, replacement: "no valor de" },
  { pattern: /ensejará a incidência de/gi, replacement: "resultará na aplicação de" },
  { pattern: /poderá ensejar/gi, replacement: "poderá resultar em" },
  { pattern: /ensejará/gi, replacement: "resultará em" },
  { pattern: /ensejam/gi, replacement: "resultam em" },
  { pattern: /incidência de juros/gi, replacement: "cobrança de juros" },
  { pattern: /juros de mora/gi, replacement: "juros por atraso" },
  { pattern: /inadimplemento/gi, replacement: "não cumprimento da obrigação" },
  { pattern: /adimplemento/gi, replacement: "cumprimento da obrigação" },
  { pattern: /constituição em mora/gi, replacement: "situação de atraso" },
  { pattern: /rescisão unilateral/gi, replacement: "encerramento por iniciativa de uma das partes" },
  { pattern: /rescisão contratual/gi, replacement: "encerramento do contrato" },
  { pattern: /rescisão/gi, replacement: "encerramento" },
  { pattern: /anuência expressa/gi, replacement: "concordância clara" },
  { pattern: /anuência/gi, replacement: "concordância" },
  { pattern: /inobservância/gi, replacement: "não cumprimento" },
  { pattern: /descumprimento/gi, replacement: "não cumprimento" },
  { pattern: /vigência/gi, replacement: "período de validade" },
  { pattern: /prorrogação/gi, replacement: "extensão do prazo" },
  { pattern: /mediante autorização/gi, replacement: "com autorização" },
  { pattern: /mediante apresentação/gi, replacement: "apresentando" },
  { pattern: /mediante/gi, replacement: "por meio de" },
  { pattern: /fica vedada/gi, replacement: "é proibida" },
  { pattern: /fica vedado/gi, replacement: "é proibido" },
  { pattern: /é facultado/gi, replacement: "é permitido" },
  { pattern: /deverá efetuar/gi, replacement: "deve fazer" },
  { pattern: /deverá ser realizado/gi, replacement: "deve ser feito" },
  { pattern: /deverá/gi, replacement: "deve" },
  { pattern: /deverão/gi, replacement: "devem" },
  { pattern: /em caso de/gi, replacement: "se houver" },
  { pattern: /na hipótese de/gi, replacement: "se" },
  { pattern: /posteriormente/gi, replacement: "depois" },
  { pattern: /previamente/gi, replacement: "antes" },
  { pattern: /a contar da data de/gi, replacement: "a partir da data de" },
  { pattern: /terá duração de/gi, replacement: "vai durar" },
  { pattern: /sem prejuízo de/gi, replacement: "sem impedir" },
  { pattern: /oriundas deste instrumento/gi, replacement: "relacionadas a este documento" },
  { pattern: /dirimir controvérsias/gi, replacement: "resolver conflitos" },
  { pattern: /ressalvadas as hipóteses de/gi, replacement: "exceto nos casos de" },
  { pattern: /em conformidade com/gi, replacement: "de acordo com" },
  { pattern: /nos termos de/gi, replacement: "conforme" },
  { pattern: /sigilosas/gi, replacement: "confidenciais" },
  { pattern: /eventuais/gi, replacement: "possíveis" },
  { pattern: /quaisquer/gi, replacement: "qualquer" },
];

function normalizeText(input: string): string {
  return input
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function splitSentences(text: string): string[] {
  // Evita separar números como 2.500,00.
  return text
    .split(/(?<=[.!?;])\s+|\n+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function simplify(sentence: string): string {
  let output = sentence;

  for (const rule of [...phraseRules, ...wordRules]) {
    output = output.replace(rule.pattern, rule.replacement);
  }

  return output
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;!?])/g, "$1")
    .trim();
}

function unique(items: string[]): string[] {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = item.trim().toLocaleLowerCase("pt-BR");

    if (!key || seen.has(key)) return false;

    seen.add(key);
    return true;
  });
}

function hasAny(text: string, patterns: RegExp[]): boolean {
  return patterns.some((pattern) => pattern.test(text));
}

const obligationPatterns = [
  /deverá/i,
  /deverão/i,
  /\bdeve\b/i,
  /\bdevem\b/i,
  /obrigad[oa]s?/i,
  /obrigatóri[oa]s?/i,
  /obriga-se/i,
  /responsável por/i,
  /compromete-se/i,
  /caberá a/i,
];

const riskPatterns = [
  /multa/i,
  /juros/i,
  /penalidade/i,
  /mora/i,
  /atraso/i,
  /inadimplemento/i,
  /rescisão/i,
  /descumprimento/i,
  /inobservância/i,
  /indenização/i,
  /perdas e danos/i,
  /cláusula penal/i,
  /suspensão/i,
];

const rightPatterns = [
  /terá direito/i,
  /tem direito/i,
  /têm direito/i,
  /direito ao?/i,
  /poderá solicitar/i,
  /poderá requerer/i,
  /fica assegurado/i,
  /é facultado/i,
];

const prohibitionPatterns = [
  /fica vedad[oa]/i,
  /é vedad[oa]/i,
  /fica proibid[oa]/i,
  /é proibid[oa]/i,
  /não poderá/i,
  /não é permitido/i,
];

const deadlinePatterns: RegExp[] = [
  /\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/g,
  /\b\d{1,2}\s+de\s+(?:janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)(?:\s+de\s+\d{4})?/gi,
  /\baté\s+(?:o\s+)?dia\s+\d{1,2}(?:\s+de\s+cada\s+mês)?/gi,
  /\baté\s+o\s+(?:primeiro|segundo|terceiro|quarto|quinto|sexto|sétimo|oitavo|nono|décimo)\s+dia\s+útil(?:\s+de\s+cada\s+mês)?/gi,
  /\b(?:prazo|período|duração|vigência)\s+de\s+\d+\s+(?:dias|meses|anos)(?:\s+(?:úteis|corridos))?/gi,
  /\bem\s+até\s+\d+\s+(?:dias|meses|anos)(?:\s+(?:úteis|corridos))?/gi,
  /\b\d+\s+(?:dias|meses|anos)(?:\s+(?:úteis|corridos))?\s+(?:após|contados da|a partir da)[^.;!?\n]*/gi,
  /\b(?:vencimento|validade)\s+(?:em|no dia|até)\s+[^.;!?\n]+/gi,
];

function extractDeadlines(text: string): string[] {
  const found: string[] = [];

  for (const pattern of deadlinePatterns) {
    found.push(...(text.match(pattern) ?? []));
  }

  // Reconhece duração sem a palavra "prazo".
  const duration = text.match(
    /\b(?:terá|tem)\s+(?:a\s+)?(?:duração|vigência)\s+de\s+\d+\s+(?:dias|meses|anos)/gi
  );

  if (duration) found.push(...duration);

  return unique(found);
}

function findLegalTerms(text: string): LegalTerm[] {
  return glossary
    .filter((entry) => entry.pattern.test(text))
    .map(({ term, meaning }) => ({ term, meaning }));
}

function buildSummary(
  sentences: string[],
  deadlines: string[]
): string {
  const ranked = sentences.map((sentence, index) => {
    let score = 0;

    if (hasAny(sentence, riskPatterns)) score += 4;
    if (hasAny(sentence, obligationPatterns)) score += 3;
    if (hasAny(sentence, rightPatterns)) score += 2;
    if (hasAny(sentence, prohibitionPatterns)) score += 3;

    if (
      deadlines.some((deadline) =>
        sentence.toLocaleLowerCase("pt-BR").includes(
          deadline.toLocaleLowerCase("pt-BR")
        )
      )
    ) {
      score += 3;
    }

    return { sentence, index, score };
  });

  const selected = ranked
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .sort((a, b) => a.index - b.index);

  const chosen =
    selected.length > 0
      ? selected.map((item) => item.sentence)
      : sentences.slice(0, 2);

  const summary = chosen.map(simplify).join(" ");

  if (summary.length > 650) {
    return summary.slice(0, 647).trimEnd() + "...";
  }

  return summary;
}

export function analyzeText(input: string): Analysis {
  const text = normalizeText(input);

  if (!text) {
    throw new Error("Insira um texto para analisar.");
  }

  const sentences = splitSentences(text);
  const deadlines = extractDeadlines(text);
  const legalTerms = findLegalTerms(text);

  const risks = sentences.filter((sentence) =>
    hasAny(sentence, riskPatterns)
  );

  const obligations = sentences.filter((sentence) =>
    hasAny(sentence, obligationPatterns)
  );

  const rights = sentences.filter((sentence) =>
    hasAny(sentence, rightPatterns)
  );

  const prohibitions = sentences.filter((sentence) =>
    hasAny(sentence, prohibitionPatterns)
  );

  const keyPoints: string[] = [];

  for (const sentence of risks) {
    keyPoints.push("Atenção: " + simplify(sentence));
  }

  for (const sentence of rights) {
    keyPoints.push(
      "Possível direito: " + simplify(sentence)
    );
  }

  for (const sentence of prohibitions) {
    keyPoints.push(
      "Possível proibição: " + simplify(sentence)
    );
  }

  const values =
    text.match(/R\$\s*\d[\d.]*(?:,\d{1,2})?/g) ?? [];

  const percentages =
    text.match(/\b\d+(?:[,.]\d+)?\s*%/g) ?? [];

  for (const value of unique(values)) {
    keyPoints.push("Valor mencionado: " + value);
  }

  for (const value of unique(percentages)) {
    keyPoints.push("Porcentagem mencionada: " + value);
  }

  return {
    title: "Seu texto simplificado",

    summary: buildSummary(sentences, deadlines),

    simplifiedExplanation:
      sentences.map(simplify).join(" "),

    keyPoints: unique(keyPoints),

    deadlines,

    obligations: unique(obligations.map(simplify)),

    legalTerms,

    disclaimer:
      "Análise local baseada em regras e dicionário jurídico. " +
      "O sistema não utiliza inteligência artificial e não " +
      "compreende todos os contextos jurídicos. Algumas " +
      "simplificações podem ser imprecisas ou incompletas. " +
      "Confira sempre o texto original. O EntreLinhas não " +
      "substitui orientação jurídica profissional.",
  };
}
