

describe('handle dropdown', ()=> {
    it.skip('dropdown with select', ()=> {

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        
        //za ID se koristi #, za type npr ovako nesto input[type='checkbox']
        
        cy.get('#zcf_address_country')
        .select('Italy')
        .should('have.value', 'Italy')
        })
        
        it.skip('dropdown without select', ()=> {
        
            cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
            
            cy.get('#select2-billing_country-container').click()
            cy.get('.select2-search__field').type('Italy').type('{enter}')   //kada treba enter da se pritisne npr ovde u dropdown jer nema clickonda se kuca komanta za enter
                                                                             // kod bootstrap element
            cy.get('#select2-billing_country-container')
            .should('have.text', 'Italy')                   // ovde se korsiti have.text inac ekoristimo have.value kad hocemo da proverimo neku vrednost
            
        
        })
        
        it.skip('dropdown auto select', ()=> {
        
            cy.visit("https://www.wikipedia.org/")
            
            cy.get('#searchInput').type('Delhi')
            cy.get('.suggestion-title').contains('Delhi University').click()
            
        })

    })
        /*   NESTO NE RADI !!!!
it('dynamic dropdown', ()=> {   //kada ima puno random ponudjenih opcija

    cy.visit("https://www.google.com/")
    cy.get("input[name='q']").type('cypress automation')
    cy.wait(3000)
    cy.get('div.wM6W7d>span').should('have.lenght', 11)

    cy.get('div.wM6W7d>span').each($el, index, $list)  =>{ //jquery function, each- ima u cypress each doc da se nadje kako bi trebalo da izgleda
        if($el.tex()==='cypress automation tool') {
     {
        cy.wrap($el).click()     //wrap kao da umota' ovo gore da $el pozove da klikne u ovoj metodi se tako poziva click
     }
    }
}
     cy.get("input[name='q']").should('have.value', 'cypress automation tool' )  //assertion added
    })
   
}) */