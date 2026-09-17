# Trabalho Individual - React Router

Este projeto foi desenvolvido como parte do trabalho pratico sobre a utilizacao do React Router. O objetivo e simular o site de uma empresa de contabilidade ficticia chamada "Contabilidade Confianca", demonstrando a navegacao entre diferentes paginas de forma fluida.

## Estrutura e Funcionamento

O projeto foi estruturado utilizando o conceito de componentes e roteamento. A organizacao basica conta com componentes globais (Header e Footer) e paginas especificas que mudam de acordo com a URL acessada.

As paginas do sistema sao:
- Home: Pagina inicial com a apresentacao da empresa.
- Servicos: Pagina detalhando as solucoes oferecidas pela contabilidade (Abertura de Empresas, Assessoria Fiscal, etc).
- Quem Somos: Pagina contando a historia, missao e valores do escritorio.
- Contato: Informacoes de contato e endereco.

A navegacao e gerenciada pelo pacote react-router-dom. Atraves dos componentes BrowserRouter, Routes, Route e Link, conseguimos transitar entre as paginas sem que o navegador precise recarregar completamente, oferecendo uma experiencia rapida e dinamica, tipica de Single Page Applications (SPA).

## Como rodar o projeto

Para executar este projeto na sua maquina, voce precisa ter o Node.js instalado. Siga os passos abaixo:

1. Abra o terminal na pasta raiz do projeto (onde esta o arquivo package.json).
2. Instale as dependencias executando o comando:
   npm install

3. Apos a conclusao da instalacao, inicie o servidor de desenvolvimento com o comando:
   npm run dev

4. O terminal exibira um link (geralmente http://localhost:5173). Pressione a tecla Ctrl e clique no link, ou copie e cole no seu navegador, para visualizar a aplicacao rodando.