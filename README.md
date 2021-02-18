# VV-DOJO-SELETORES

Este projeto tem como objetivo demonstrar o uso de seletores CSS e XPath nas automações para encontrar elementos HTML aplicações Web.

## Pré-requisitos:
- [NodeJS](https://nodejs.org/en/download/ "NodeJS")

## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")

## Estrutura de pastas

<pre>
📦vv-template-cypress  
 ┣ 📂cypress  
 ┃ ┣ 📂integration  
 ┃ ┃ ┣ 📂cssSelector  
 ┃ ┃ ┃ ┗ 📜exemploCssSelector.spec.js  
 ┃ ┃ ┗ 📂xpath  
 ┃ ┃   ┗ 📜exemploXPath.spec.js  
 ┃ ┣ 📂plugins  
 ┃ ┃ ┗ 📜index.js  
 ┃ ┗ 📂support  
 ┃   ┣ 📜commands.js  
 ┃   ┗ 📜index.js  
 ┣ 📜.gitignore  
 ┣ 📜cypress.json  
 ┣ 📜package-lock.json  
 ┣ 📜package.json  
 ┗ 📜README.md  
 </pre>
 
## Tutorial, Instalação e Execução

### Executar este projeto em sua maquina

* Em um terminal, dentro da pasta do projeto, execute o seguinte comando:

**Instalar as dependências:**  
```
npm i
```

### Utilizando o Cypress

* Em um terminal execute um dos comandos abaixo para abrir o cypress:
```
npx cypress open 
```
* Para executar os testes diretamente, sem abrir o Cypress use:
```
npx cypress run 
```
