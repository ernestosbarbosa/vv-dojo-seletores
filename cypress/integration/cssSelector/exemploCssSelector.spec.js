/// <reference types="cypress" />

context('Exemplos XPath', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Encontrando os logos das nossas marcas', () => {
    //Encontrando a area das nossas marcas pelo id
    cy.get('#our-brands').should('exist')

    //Encontrando logo Bartira usando propriedade css href
    cy.get('[href="/bartira"]').should('have.descendants', 'img')

    //Encontrando o quarto logo da lista
    cy.get('#our-brands .brand:nth-child(4) > a').should('have.attr', 'href', '/extra')
  })

})
