import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Cesar visits teststore.automationtesting.co.uk', ()=> {
    cy.visit('/')
    cy.get('.ui-autocomplete-input').type('T-Shirt').type('{enter}')
    cy.location('pathname', {timeout:10000}).should('include', '/search')
    cy.get('.thumbnail > img').click()
})

When('Cesar adds a product', function(){
    cy.get('#group_1').select('L')
    cy.get('.add > .btn').click()
})

Then("Cesar should see the message {string}", function(message){
    cy.get('#myModalLabel').should('be.visible')
    .and('contain', message)
})
