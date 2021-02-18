/// <reference types="cypress" />

context('Exemplos XPath', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Encontrando os logos das nossas marcas', () => {
    //Encontrando a area das nossas marcas pelo id
    cy.xpath('//*[@id="our-brands"]').should('exist')

    //Encontrando logo Bartira usando propriedade css href
    cy.xpath('//*[@href="/bartira"]').should('have.descendants', 'img')

    //Encontrando o quarto logo da lista
    cy.xpath('//*[@id="our-brands"]/div/div/div/div/div[4]/a').should('have.attr', 'href', '/extra')
    cy.xpath('//*[@class="col-sm-3 brand"][4]/a').should('have.attr', 'href', '/extra')
  })

})
