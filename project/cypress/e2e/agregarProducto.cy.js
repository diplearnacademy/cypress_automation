
describe("pruebas de la funcionalidad agregar producto", ()=>{

    it('agregar un producto al carrito de compras', ()=> {
        // G - A - Precondiciones
        //cy.visit('/')
        cy.miVisit()
        cy.get('.ui-autocomplete-input').type('T-Shirt').type('{enter}')
        cy.location('pathname', {timeout:10000}).should('include', '/search')
        cy.pause()
        cy.get('.thumbnail > img').click()
        cy.get('#group_1').select('L').debug()
        // W - A - ejecutar lo que queremos probar
        cy.get('.add > .btn').click()

        // T - A - verificacion
        cy.pause()
        cy.get('#myModalLabel').should('be.visible')
        .and('contain', 'Product successfully added to your shopping cart')
    })

})