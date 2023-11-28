import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import { FIRTS_PRODUCT } from "../../support/pages/searchPages"
import { MESSAGE } from "../../support/pages/modelProductPage"

Before(() => {
    cy.fixture('product').as('product')
})

Given('Cesar visits teststore.automationtesting.co.uk', ()=> {
    cy.visit('/')
    cy.search('T-Shirt')
    cy.get(FIRTS_PRODUCT).click()
})

When('Cesar adds a product', function(){
    cy.addProductToShoppingCart(this.product)
})

Then("Cesar should see the message {string}", function(message){
    cy.get(MESSAGE).should('be.visible')
    .and('contain', message)
})


// Duplicamos localizadore
// Duplicamos tareas -> Duplicando interaccion o acciones
//
// screenplay
// Narrativa (.feature)
// step definitions
// Task
// Interaction - por el momento no se require
// Questions -> preguntar sobre un elemento y con base a la respuesta hacer la verificacion
// UI -> PageObject - Unica REPONSABILIDAD  mapear la interfaz de usuario