/// <reference types="cypress" />

context('Desafio CSS / XPath', () => {
  beforeEach(() => {
    // Buscando uma geladeira
    cy.visit('https://www.casasbahia.com.br/geladeira/b')
  })

  it('Mostre que a geladeira Inverse BRE80AK está na lista utilizando CSS Selector', () => {
  })

  it('Mostre que a geladeira Electrolux DFX41 está na lista utilizando XPATH', () => {
  })

})
