describe('Intercept Demo', ()=>{
    
    it('Mocked API Response db', ()=>{

        // http://localhost:3000/db
        cy.intercept('GET', '/db', {
            fixture: 'intercept/db.json'
        }).as('getDB')

        cy.visit('http://localhost:3000')

        cy.wait('@getDB')

        cy.get(':nth-child(1) > sup').should('contain', 3) // Posts - Real 2
        cy.get(':nth-child(2) > sup').should('contain', 2) // comments - Real 1
    })

    it('Mocked API Response Posts', ()=>{

        // http://localhost:3000/posts
        cy.intercept('GET', '/posts', {
            fixture: 'intercept/posts.json'
        }).as('getPots')

        cy.visit('http://localhost:3000')

        cy.get(':nth-child(1) > a').click() // Click al link posts

        // Falla porque cypress espera que cargue una pagina HTML
        // y lo que esta cargando es texto plano
        cy.wait('@getPots')
        cy.location('pathname', {timeout:10000}).should('include', '/posts')

    })

})