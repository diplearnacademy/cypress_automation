const homePage = require("../pages/homePage");

Cypress.Commands.add('search', (text) => { 
    cy.get(homePage.INPUT_SEARCH).type(text).type('{enter}')
    cy.location('pathname', {timeout:10000}).should('include', '/search')
 })