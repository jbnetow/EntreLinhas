
import React, { useState } from "react";

import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import {
  analyzeText,
  type Analysis,
  type LegalTerm,
} from "./src/analyzer";

export default function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Analysis | null>(null);

  async function analyze() {
    if (!text.trim()) {
      Alert.alert(
        "Insira um texto",
        "Cole ou digite um texto para começar a análise."
      );
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      await new Promise<void>((resolve) =>
        setTimeout(resolve, 200)
      );

      const analysis = analyzeText(text);

      setResult({
        ...analysis,
        title: analysis.title || "Seu texto simplificado",
        summary: analysis.summary || "",
        simplifiedExplanation:
          analysis.simplifiedExplanation || "",
        keyPoints: Array.isArray(analysis.keyPoints)
          ? analysis.keyPoints
          : [],
        deadlines: Array.isArray(analysis.deadlines)
          ? analysis.deadlines
          : [],
        obligations: Array.isArray(analysis.obligations)
          ? analysis.obligations
          : [],
        legalTerms: Array.isArray(analysis.legalTerms)
          ? analysis.legalTerms
          : [],
        disclaimer: analysis.disclaimer || "",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Não foi possível analisar o texto.";

      Alert.alert("Erro na análise", message);
    } finally {
      setLoading(false);
    }
  }

  function newAnalysis() {
    setText("");
    setResult(null);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ExpoStatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* CABEÇALHO */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>E</Text>
          </View>

          <View>
            <Text style={styles.brand}>
              EntreLinhas
            </Text>

            <Text style={styles.tagline}>
              Entenda o que realmente importa.
            </Text>
          </View>
        </View>

        {!result ? (
          <>
            {/* APRESENTAÇÃO */}
            <View style={styles.hero}>
              <Text style={styles.eyebrow}>
                JURIDIQUÊS SEM COMPLICAÇÃO
              </Text>

              <Text style={styles.heading}>
                {"Textos jurídicos?\nVamos simplificar."}
              </Text>

              <Text style={styles.description}>
                Cole um texto jurídico ou formal.
                O EntreLinhas ajuda a explicar
                expressões difíceis e identificar
                informações importantes.
              </Text>

              <View style={styles.pills}>
                <Text style={styles.pill}>
                  Linguagem simples
                </Text>

                <Text style={styles.pill}>
                  Termos jurídicos
                </Text>

                <Text style={styles.pill}>
                  Prazos
                </Text>
              </View>
            </View>

            {/* ENTRADA DE TEXTO */}
            <Text style={styles.sectionTitle}>
              Comece sua análise
            </Text>

            <Text style={styles.inputLabel}>
              Texto para simplificar
            </Text>

            <TextInput
              value={text}
              onChangeText={setText}
              multiline
              placeholder="Cole aqui uma cláusula contratual, comunicado jurídico ou outro texto formal..."
              placeholderTextColor="#9299AA"
              textAlignVertical="top"
              style={styles.input}
            />

            {/* CONTADOR */}
            <View style={styles.textInfo}>
              <Text style={styles.counter}>
                {text.length} caracteres
              </Text>

              {text.length > 0 && (
                <TouchableOpacity
                  onPress={() => setText("")}
                >
                  <Text style={styles.clearText}>
                    Limpar texto
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {/* BOTÃO */}
            <TouchableOpacity
              style={[
                styles.button,
                loading && styles.buttonDisabled,
              ]}
              onPress={analyze}
              disabled={loading}
              activeOpacity={0.8}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.buttonText}>
                  Simplificar texto →
                </Text>
              )}
            </TouchableOpacity>

            {/* INFORMAÇÕES */}
            <View style={styles.infoCard}>
              <Text style={styles.infoTitle}>
                Como funciona?
              </Text>

              <Text style={styles.infoText}>
                O EntreLinhas utiliza um dicionário
                jurídico e regras locais para
                simplificar expressões e identificar
                informações relevantes.
              </Text>
            </View>

            <Text style={styles.footnote}>
              Gratuito e local. Nenhum texto é
              enviado para servidores.
            </Text>
          </>
        ) : (
          /* RESULTADOS */
          <View style={styles.results}>
            <TouchableOpacity onPress={newAnalysis}>
              <Text style={styles.back}>
                ‹ Nova análise
              </Text>
            </TouchableOpacity>

            <Text style={styles.resultEyebrow}>
              ANÁLISE CONCLUÍDA
            </Text>

            <Text style={styles.resultHeading}>
              {result.title}
            </Text>

            <Text style={styles.resultDescription}>
              Confira o texto simplificado
              e os termos jurídicos identificados.
            </Text>

            <ResultCard
              title="Resumo"
              body={result.summary}
            />

            <ResultCard
              title="Texto simplificado"
              body={result.simplifiedExplanation}
            />

            <LegalTermsCard
              terms={result.legalTerms}
            />

            <ResultList
              title="Pontos importantes"
              items={result.keyPoints}
            />

            <ResultList
              title="Prazos identificados"
              items={result.deadlines}
            />

            <ResultList
              title="Obrigações identificadas"
              items={result.obligations}
            />

            <Text style={styles.disclaimer}>
              {result.disclaimer}
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={newAnalysis}
            >
              <Text style={styles.buttonText}>
                Analisar outro texto →
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// CARD DE TEXTO
function ResultCard({
  title,
  body,
}: {
  title: string;
  body?: string;
}) {
  return (
    <View style={styles.resultCard}>
      <Text style={styles.cardTitle}>
        {title}
      </Text>

      <Text style={styles.cardBody}>
        {body || "Nenhuma informação identificada."}
      </Text>
    </View>
  );
}

// CARD DE LISTAS
function ResultList({
  title,
  items = [],
}: {
  title: string;
  items?: string[];
}) {
  const safeItems = Array.isArray(items)
    ? items
    : [];

  return (
    <View style={styles.resultCard}>
      <Text style={styles.cardTitle}>
        {title}
      </Text>

      {safeItems.length > 0 ? (
        safeItems.map((item, index) => (
          <Text
            key={`${title}-${index}`}
            style={styles.bullet}
          >
            • {item}
          </Text>
        ))
      ) : (
        <Text style={styles.cardBody}>
          Nenhum item identificado.
        </Text>
      )}
    </View>
  );
}

// CARD DE TERMOS JURÍDICOS
function LegalTermsCard({
  terms = [],
}: {
  terms?: LegalTerm[];
}) {
  const safeTerms = Array.isArray(terms)
    ? terms
    : [];

  return (
    <View style={styles.resultCard}>
      <View style={styles.termsHeader}>
        <Text style={styles.cardTitle}>
          Termos jurídicos explicados
        </Text>

        <Text style={styles.termsCount}>
          {safeTerms.length}
        </Text>
      </View>

      {safeTerms.length === 0 ? (
        <Text style={styles.cardBody}>
          Nenhum termo do dicionário foi identificado.
        </Text>
      ) : (
        safeTerms.map((item, index) => (
          <View
            key={`${item.term}-${index}`}
            style={[
              styles.termItem,
              index > 0 && styles.termDivider,
            ]}
          >
            <Text style={styles.termTitle}>
              {item.term}
            </Text>

            <Text style={styles.termMeaning}>
              {item.meaning}
            </Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F7F8FC",
  },

  container: {
    padding: 22,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 28,
    marginTop: 10,
  },

  logo: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#5146D8",
    alignItems: "center",
    justifyContent: "center",
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "800",
  },

  brand: {
    fontSize: 20,
    fontWeight: "800",
    color: "#17182B",
  },

  tagline: {
    fontSize: 12,
    color: "#7D8295",
    marginTop: 2,
  },

  hero: {
    backgroundColor: "#201D52",
    borderRadius: 24,
    padding: 22,
    marginBottom: 28,
  },

  eyebrow: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#AAA5FF",
    marginBottom: 12,
  },

  heading: {
    fontSize: 29,
    lineHeight: 36,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#D5D3EF",
  },

  pills: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
    marginTop: 18,
  },

  pill: {
    color: "#E5E3FF",
    backgroundColor: "#393477",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
    fontSize: 11,
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#22243A",
    marginBottom: 15,
  },

  inputLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#555B70",
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E4E6F0",
    borderWidth: 1,
    borderRadius: 16,
    minHeight: 220,
    padding: 16,
    fontSize: 14,
    lineHeight: 22,
    color: "#24263B",
  },

  textInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  counter: {
    fontSize: 12,
    color: "#9297A8",
  },

  clearText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#5146D8",
  },

  button: {
    backgroundColor: "#5146D8",
    padding: 17,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 18,
  },

  buttonDisabled: {
    opacity: 0.65,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  infoCard: {
    backgroundColor: "#EFEEFF",
    borderRadius: 16,
    padding: 17,
    marginTop: 24,
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#393477",
    marginBottom: 8,
  },

  infoText: {
    fontSize: 13,
    lineHeight: 21,
    color: "#555184",
  },

  footnote: {
    fontSize: 11,
    lineHeight: 17,
    color: "#9297A8",
    textAlign: "center",
    marginTop: 18,
  },

  results: {
    gap: 14,
  },

  back: {
    color: "#5146D8",
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 10,
  },

  resultEyebrow: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#5146D8",
  },

  resultHeading: {
    fontSize: 27,
    lineHeight: 34,
    fontWeight: "800",
    color: "#22243A",
  },

  resultDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: "#85899A",
    marginBottom: 8,
  },

  resultCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 17,
    borderWidth: 1,
    borderColor: "#E8E9F1",
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#292A40",
    marginBottom: 9,
  },

  cardBody: {
    fontSize: 14,
    lineHeight: 22,
    color: "#555B70",
  },

  bullet: {
    fontSize: 13,
    lineHeight: 21,
    color: "#555B70",
    marginBottom: 5,
  },

  termsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  termsCount: {
    backgroundColor: "#EFEEFF",
    color: "#5146D8",
    fontSize: 12,
    fontWeight: "800",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    overflow: "hidden",
  },

  termItem: {
    paddingVertical: 10,
  },

  termDivider: {
    borderTopWidth: 1,
    borderTopColor: "#E8E9F1",
  },

  termTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#5146D8",
    marginBottom: 5,
  },

  termMeaning: {
    fontSize: 13,
    lineHeight: 20,
    color: "#555B70",
  },

  disclaimer: {
    fontSize: 11,
    lineHeight: 17,
    color: "#85899A",
    marginTop: 4,
  },
});
