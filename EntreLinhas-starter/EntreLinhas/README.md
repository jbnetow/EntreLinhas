
# EntreLinhas

### Simplificando textos, ampliando o acesso à informação.

O **EntreLinhas** é um projeto acadêmico desenvolvido com o objetivo de facilitar a compreensão de documentos que utilizam linguagem técnica, formal ou burocrática.

A proposta é tornar informações importantes mais acessíveis, permitindo que diferentes públicos compreendam melhor documentos que fazem parte de seu cotidiano.

Atualmente, o projeto conta com um protótipo de aplicativo mobile voltado principalmente à simplificação de textos jurídicos, utilizando processamento local baseado em regras e um dicionário de expressões jurídicas.

---

## 1. Sobre o projeto

Muitas pessoas encontram dificuldades para interpretar documentos como contratos, editais, comunicados e outros textos que apresentam linguagem complexa.

Esses documentos frequentemente contêm informações importantes relacionadas a prazos, requisitos, obrigações, direitos e procedimentos que precisam ser compreendidos corretamente.

A dificuldade de interpretação pode comprometer a tomada de decisões, o cumprimento de responsabilidades e o acesso a informações relevantes.

Diante desse cenário, surgiu o **EntreLinhas**, uma proposta de plataforma digital capaz de transformar conteúdos complexos em explicações mais simples, organizadas e acessíveis.

O projeto pretende contribuir para a democratização do acesso à informação, promovendo maior clareza, autonomia e praticidade na compreensão de documentos.

## 2. Objetivo

### Objetivo geral

Desenvolver uma solução tecnológica que facilite a compreensão de documentos com linguagem técnica, formal ou burocrática, apresentando informações de maneira simplificada e acessível.

### Objetivos específicos

- Simplificar expressões técnicas e jurídicas.
- Gerar resumos dos textos analisados.
- Identificar informações importantes.
- Destacar prazos e obrigações presentes nos documentos.
- Explicar termos jurídicos de difícil compreensão.
- Oferecer uma interface simples e intuitiva.
- Permitir o processamento local dos textos, sem depender de APIs externas.

## 3. Público-alvo

O EntreLinhas foi idealizado para atender diferentes públicos, incluindo:

- Estudantes que precisam interpretar documentos acadêmicos e institucionais.
- Profissionais que lidam com comunicados e documentos formais.
- Microempreendedores que precisam compreender contratos e obrigações.
- Cidadãos que encontram dificuldades na interpretação de documentos técnicos e burocráticos.

Embora a proposta inicial seja abrangente, o protótipo atual concentra suas funcionalidades na simplificação de textos jurídicos.

## 4. Funcionalidades implementadas

O aplicativo possui as seguintes funcionalidades:

### 4.1. Simplificação textual

O usuário pode inserir um texto jurídico ou formal, e o sistema realiza substituições de expressões complexas por termos mais acessíveis.

A simplificação utiliza regras predefinidas e um dicionário de expressões jurídicas.

### 4.2. Resumo do conteúdo

O aplicativo identifica trechos considerados relevantes e apresenta um resumo simplificado.

A seleção dos trechos é realizada por meio de regras que consideram a presença de obrigações, prazos, penalidades e outras informações importantes.

### 4.3. Identificação de pontos importantes

O sistema procura identificar informações como:

- Multas e penalidades.
- Juros e consequências de atrasos.
- Possíveis direitos e permissões.
- Proibições.
- Valores monetários.
- Porcentagens mencionadas no texto.

### 4.4. Identificação de prazos

O aplicativo procura reconhecer referências a datas, períodos e prazos presentes no conteúdo analisado.

### 4.5. Identificação de obrigações

O sistema identifica frases que apresentam expressões relacionadas a responsabilidades e obrigações, como "deverá", "deve" e "obriga-se".

### 4.6. Dicionário jurídico

O EntreLinhas possui um dicionário de termos jurídicos que permite identificar expressões técnicas e apresentar seus significados em linguagem mais acessível.

Alguns exemplos são:

| Termo jurídico | Significado simplificado |
|---|---|
| Adimplemento | Cumprimento de uma obrigação. |
| Inadimplemento | Não cumprimento de uma obrigação. |
| Mora | Atraso no cumprimento de uma obrigação. |
| Anuência expressa | Concordância manifestada claramente. |
| Rescisão unilateral | Encerramento de um contrato por iniciativa de uma das partes, quando permitido. |
| Cláusula penal moratória | Multa contratual prevista para situações de atraso. |
| Vigência | Período em que um contrato ou regra está em vigor. |
| Dirimir controvérsias | Resolver conflitos ou divergências. |

### 4.7. Processamento local

A análise dos textos é realizada diretamente no aplicativo, sem envio das informações para servidores externos.

O protótipo não utiliza serviços pagos nem APIs de inteligência artificial.

## 5. Tecnologias utilizadas

O aplicativo foi desenvolvido utilizando as seguintes tecnologias:

| Tecnologia | Utilização |
|---|---|
| React Native | Desenvolvimento da interface mobile. |
| Expo | Ambiente de desenvolvimento e execução do aplicativo. |
| TypeScript | Implementação da lógica e das funcionalidades. |
| JavaScript | Base tecnológica utilizada pelo React Native. |
| Node.js | Ambiente necessário para executar as ferramentas de desenvolvimento. |
| Visual Studio Code | Editor utilizado no desenvolvimento. |

O processamento dos textos utiliza expressões regulares, regras de substituição e um dicionário jurídico implementado em TypeScript.

## 6. Estrutura do projeto

A estrutura principal do aplicativo é:

```text
EntreLinhas/
│
├── mobile/
│   │
│   ├── src/
│   │   └── analyzer.ts
│   │
│   ├── App.tsx
│   ├── package.json
│   ├── app.json
│   └── ...
│
└── README.md
```

### Principais arquivos

**App.tsx**

Responsável pela interface do aplicativo, incluindo a entrada de texto, os botões e a apresentação dos resultados.

**src/analyzer.ts**

Responsável pelo processamento dos textos, simplificação de expressões jurídicas, identificação de informações e geração dos resultados.

**package.json**

Contém as dependências e os scripts necessários para executar o projeto.

**app.json**

Contém configurações do aplicativo Expo.

Observação: a pasta original do projeto pode conter um diretório `backend`, criado durante etapas anteriores de desenvolvimento. O protótipo mobile atual não depende desse backend.

---

# 7. Como executar o projeto

O EntreLinhas pode ser executado durante o desenvolvimento em um computador ou visualizado em um celular Android utilizando o Expo Go.

## 7.1. Pré-requisitos

Antes de começar, é necessário ter instalado:

- Node.js, preferencialmente uma versão LTS compatível com o Expo SDK utilizado.
- npm, normalmente instalado junto com o Node.js.
- Visual Studio Code ou outro editor de código.
- Expo Go no celular, caso deseje testar em um dispositivo Android.

Links oficiais:

Node.js:
https://nodejs.org/

Visual Studio Code:
https://code.visualstudio.com/

Expo:
https://expo.dev/

Expo Go:
https://expo.dev/go

**Importante:** a versão do Expo Go precisa ser compatível com o SDK utilizado pelo projeto.

## 7.2. Abrir o projeto no computador

Primeiro, extraia o projeto, caso ele esteja compactado em um arquivo ZIP.

Abra o Visual Studio Code e selecione:

**File > Open Folder**

Escolha a pasta principal do projeto EntreLinhas.

Em seguida, abra o terminal integrado do VS Code:

**Terminal > New Terminal**

Acesse a pasta do aplicativo:

```powershell
cd mobile
```

Caso o terminal já esteja dentro da pasta `mobile`, não será necessário executar esse comando.

## 7.3. Instalar as dependências

No terminal, execute:

```powershell
npm install
```

Esse comando instala as bibliotecas necessárias para executar o aplicativo.

A instalação requer conexão com a internet.

As dependências são definidas no arquivo `package.json`.

## 7.4. Iniciar o aplicativo

Depois de instalar as dependências, execute:

```powershell
npx.cmd expo start -c --port 8082
```

O comando inicia o servidor de desenvolvimento do Expo e limpa o cache.

Após a inicialização, o terminal apresentará um QR Code e as opções disponíveis para executar o aplicativo.

Se a porta 8082 estiver ocupada, será necessário liberar a porta ou utilizar outra disponível.

---

# 8. Como executar no celular Android

Para testar o EntreLinhas no celular, siga as etapas abaixo.

### Passo 1 — Instalar o Expo Go

Instale o aplicativo Expo Go no celular Android.

O Expo Go pode ser encontrado na Google Play Store ou no site oficial do Expo.

### Passo 2 — Conectar os dispositivos

Conecte o computador e o celular à mesma rede local, preferencialmente à mesma rede Wi-Fi.

O computador também pode estar conectado por cabo de rede, desde que os dispositivos consigam se comunicar pela rede local.

### Passo 3 — Iniciar o servidor

No computador, dentro da pasta `mobile`, execute:

```powershell
npx.cmd expo start -c --port 8082
```

### Passo 4 — Ler o QR Code

Abra o Expo Go no celular e utilize a opção de leitura do QR Code apresentado no terminal.

Aguarde o carregamento do aplicativo.

### Passo 5 — Utilizar o EntreLinhas

Depois que o aplicativo abrir:

1. Cole ou digite um texto jurídico.
2. Pressione o botão "Simplificar texto".
3. Aguarde o processamento.
4. Visualize o resumo e a explicação simplificada.
5. Consulte os termos jurídicos identificados.
6. Confira os prazos, as obrigações e os pontos importantes.

O processamento dos textos acontece localmente no aplicativo.

**Observação:** durante o desenvolvimento com Expo Go, o celular depende da comunicação com o servidor Expo iniciado no computador para carregar o aplicativo. Isso é diferente do processamento dos textos, que não depende de APIs ou servidores externos.

---

# 9. Como executar no próprio computador

O projeto foi desenvolvido como aplicativo mobile.

Para utilizá-lo diretamente no computador, é possível recorrer a um emulador Android configurado com o Android Studio.

O emulador permite executar e testar aplicativos Android sem utilizar um celular físico.

### Passo 1 — Instalar o Android Studio

Acesse:

https://developer.android.com/studio

Instale o Android Studio e configure o Android SDK.

### Passo 2 — Criar um dispositivo virtual

No Android Studio, abra o gerenciador de dispositivos virtuais (Device Manager).

Crie um dispositivo Android virtual compatível e inicialize o emulador.

### Passo 3 — Iniciar o Expo

No terminal do VS Code, dentro da pasta `mobile`, execute:

```powershell
npx.cmd expo start -c --port 8082
```

### Passo 4 — Abrir no emulador

Com o emulador iniciado e corretamente configurado, pressione:

```text
a
```

no terminal do Expo.

O Expo tentará abrir o aplicativo no emulador Android.

Caso o ambiente não esteja configurado corretamente, poderá ser necessário ajustar o Android SDK e as variáveis de ambiente.

**Importante:** o projeto atual não foi desenvolvido como uma aplicação web. Sua execução no computador é realizada por meio de um ambiente Android.

---

# 10. Exemplo de utilização

Considere o seguinte trecho jurídico:

**Texto original:**

"O inadimplemento da obrigação pecuniária ensejará a incidência de cláusula penal moratória correspondente a 2% sobre o montante devido."

Uma simplificação desejada para esse conteúdo seria:

**Texto simplificado:**

"Se a obrigação de pagar não for cumprida, será aplicada uma multa por atraso de 2% sobre o valor que deve ser pago."

O aplicativo utiliza regras de substituição para produzir uma versão mais acessível do conteúdo.

Além disso, o dicionário jurídico pode identificar expressões como:

- Inadimplemento.
- Obrigação pecuniária.
- Cláusula penal moratória.
- Montante devido.

Cada termo identificado é acompanhado de uma explicação simplificada.

Os resultados podem variar conforme a estrutura e as expressões presentes no texto.

---

# 11. Funcionamento do analisador

O EntreLinhas utiliza uma abordagem baseada em regras para realizar o processamento textual.

O processo acontece em etapas:

### 1. Entrada do texto

O usuário insere o conteúdo que deseja compreender.

### 2. Normalização

O sistema organiza espaços e quebras de linha para facilitar o processamento.

### 3. Identificação de expressões

O analisador procura expressões jurídicas previamente cadastradas.

### 4. Simplificação

As expressões identificadas são substituídas por construções mais acessíveis.

Algumas regras procuram simplificar frases completas, enquanto outras substituem termos específicos.

### 5. Identificação de informações relevantes

O sistema procura padrões relacionados a prazos, obrigações, valores, porcentagens e possíveis penalidades.

### 6. Geração do resumo

O analisador seleciona trechos relevantes com base em critérios predefinidos.

### 7. Apresentação dos resultados

O aplicativo organiza as informações em seções para facilitar a leitura.

Todo esse processamento ocorre localmente, utilizando TypeScript.

---

# 12. Limitações do projeto

O EntreLinhas é um protótipo acadêmico e possui algumas limitações.

- Não utiliza inteligência artificial generativa.
- Não compreende integralmente o contexto jurídico.
- Depende de regras e expressões previamente cadastradas.
- Pode não reconhecer determinados termos ou construções.
- Pode produzir simplificações incompletas ou imprecisas.
- A identificação de prazos e obrigações não garante que todas as informações relevantes tenham sido encontradas.
- O resumo é baseado em seleção de trechos, não em compreensão semântica completa.
- A versão atual recebe textos digitados ou colados, sem importação direta de documentos PDF.

Por esses motivos, os resultados devem ser conferidos com o documento original.

O EntreLinhas não substitui orientação jurídica profissional.

---

# 13. Possibilidades de evolução

O projeto poderá receber novas funcionalidades em versões futuras, como:

- Ampliação do dicionário jurídico.
- Suporte a diferentes categorias de documentos.
- Importação de arquivos PDF.
- Reconhecimento de textos presentes em imagens.
- Melhoria das regras de interpretação textual.
- Expansão para editais, comunicados e documentos administrativos.
- Desenvolvimento de uma versão web.
- Utilização futura de técnicas de processamento de linguagem natural.
- Implementação de recursos de acessibilidade.

Essas funcionalidades representam possibilidades de evolução e não fazem parte necessariamente da versão atual.

---

# 14. Contexto acadêmico

O EntreLinhas foi desenvolvido como projeto acadêmico na área de **Análise e Desenvolvimento de Sistemas (ADS)**.

Seu desenvolvimento busca aplicar conhecimentos relacionados a:

- Levantamento e análise de requisitos.
- Planejamento de soluções tecnológicas.
- Prototipação de interfaces.
- Desenvolvimento de aplicações.
- Programação com TypeScript.
- Organização e processamento de dados textuais.
- Testes e validação de funcionalidades.

A proposta inicial considerava uma plataforma digital para facilitar a compreensão de diferentes tipos de documentos, incluindo aplicações web.

Durante a implementação do protótipo, optou-se pelo desenvolvimento de uma aplicação mobile com React Native e Expo, concentrando inicialmente as funcionalidades em textos jurídicos.

Essa delimitação permitiu desenvolver e testar uma solução funcional para um problema específico, mantendo a possibilidade de ampliação futura.

---

# 15. Considerações finais

O EntreLinhas surgiu da necessidade de tornar informações importantes mais acessíveis a pessoas que encontram dificuldades na interpretação de documentos técnicos, formais e burocráticos.

Por meio da simplificação textual, da identificação de informações relevantes e da explicação de termos jurídicos, o aplicativo busca contribuir para uma compreensão mais clara e organizada desses conteúdos.

O protótipo demonstra como conhecimentos de Análise e Desenvolvimento de Sistemas podem ser aplicados na construção de soluções voltadas a problemas reais do cotidiano.

Embora apresente limitações decorrentes de sua abordagem baseada em regras, o projeto estabelece uma base funcional para futuras melhorias e ampliações.

**EntreLinhas — Simplificando textos, ampliando o acesso à informação.**
