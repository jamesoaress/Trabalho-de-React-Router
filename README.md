# Controller — Contabilidade e Assessoria

Site institucional responsivo da **Controller Contabilidade e Assessoria**, desenvolvido com React, TypeScript e Vite. O projeto apresenta os serviços do escritório, sua história, seus valores e os canais de contato.

## Funcionalidades

- Navegação entre páginas sem recarregar a aplicação, usando React Router.
- Layout responsivo para desktop, tablet e celular.
- Menu de navegação com versão mobile.
- Seção inicial com apresentação da empresa e chamadas para ação.
- Cards com os principais serviços contábeis.
- Página institucional com missão e valores.
- Página de contato com e-mail, telefone, endereço e formulário visual.
- Interface estilizada com Bootstrap 5, Bootstrap Icons e CSS próprio.
- Identidade visual baseada em azul-marinho, azul-claro e branco.

> O formulário de contato está atualmente preparado apenas como interface. Ele não envia dados para um servidor ou serviço externo.

## Rotas disponíveis

| Rota | Página |
| --- | --- |
| `/` | Página inicial |
| `/quem-somos` | História, missão e valores |
| `/servicos` | Serviços oferecidos |
| `/contato` | Informações de contato e formulário |

## Tecnologias utilizadas

- React 19
- TypeScript
- Vite
- React Router DOM
- Bootstrap 5
- Bootstrap Icons
- ESLint

## Pré-requisitos

Antes de instalar o projeto, instale:

- [Node.js](https://nodejs.org/) — versão 20.19 ou superior, ou versão 22.12 ou superior.
- npm, instalado junto com o Node.js.
- Git, caso o projeto seja obtido de um repositório.

Para conferir as versões instaladas:

```bash
node --version
npm --version
```

## Instalação em uma máquina nova

### 1. Obtenha o projeto

Clone o repositório e entre na pasta do projeto:

```bash
git clone URL_DO_REPOSITORIO
cd "Trabalho Router"
```

Se o projeto já estiver salvo no computador, apenas abra o terminal na pasta que contém o arquivo `package.json`.

### 2. Instale as dependências

Execute:

```bash
npm install
```

Esse comando lê o `package.json` e instala o React, React Router, Bootstrap, Vite, TypeScript e as demais dependências necessárias. A pasta `node_modules` será criada automaticamente.

### 3. Inicie o servidor de desenvolvimento

Execute:

```bash
npm run dev
```

O Vite exibirá um endereço semelhante a:

```text
http://localhost:5173/
```

Abra esse endereço no navegador. Durante o desenvolvimento, as alterações salvas nos arquivos serão refletidas automaticamente.

## Scripts disponíveis

```bash
npm run dev      # inicia o servidor de desenvolvimento
npm run build    # verifica o TypeScript e gera a versão de produção
npm run preview  # visualiza localmente a versão gerada pelo build
npm run lint     # executa a análise de código com ESLint
```

Para testar a versão de produção localmente:

```bash
npm run build
npm run preview
```

## Estrutura principal

```text
src/
├── components/
│   ├── Footer/
│   └── Header/
├── pages/
│   ├── Contato/
│   ├── Home/
│   ├── QuemSomos/
│   └── Servicos/
├── App.tsx
├── main.tsx
├── routes.tsx
└── styles.css
index.html
package.json
```

- `src/main.tsx`: ponto de entrada da aplicação e importação do Bootstrap.
- `src/routes.tsx`: configuração das rotas e dos componentes globais.
- `src/components/`: componentes reutilizáveis, como cabeçalho e rodapé.
- `src/pages/`: páginas exibidas pelas rotas.
- `src/styles.css`: estilos personalizados e identidade visual.

## Observações

- Não é necessário executar `npm install` novamente a cada inicialização. Depois da primeira instalação, use apenas `npm run dev`.
- Não versionar a pasta `node_modules`; ela é recriada pelo comando `npm install`.
- Em hospedagens estáticas, o servidor deve estar configurado para redirecionar as rotas do React Router para `index.html`.