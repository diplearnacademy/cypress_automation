describe('Navegacion elementos de la documetnacion de cypress', () => {
  
  it('Navegacion a la documentacion de la funcion Get', () => {
    cy.visit('https://example.cypress.io')
    
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click()

    cy.get('#get > a').should('be.visible')
  })


})