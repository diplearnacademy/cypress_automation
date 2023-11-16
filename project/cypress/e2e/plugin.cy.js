describe('Probando un plugin', () => {

    beforeEach(()=> {
        cy.fixture('example').as('data')
    })

    it('plugin faker', function(){
        cy.visit('/')
        cy.screenshot('home')
        cy.get('.ui-autocomplete-input').screenshot('search')
        console.log('Name: ', this.data.name)
        console.log('Email: ', this.data.email)
        console.log('Body: ', this.data.body)
    })

})