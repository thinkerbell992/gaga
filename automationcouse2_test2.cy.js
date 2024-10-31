describe('my secont test suite', function()
{

it('my second case', function() {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)

    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').each(($el, index, $list) =>{      //$el to znaci kad smo gore definisali da ih ima 4 sad on uzima u el prvi , index je 0 u smislu krece od 0 (to je prvi u nizu), list  je lista od ovih 4
        const texVege=$el.find('h4.product-name').text()
        if(texVege.includes('Cashews'))
        {
         cy.wrap($el).find('button').click()  
        }
    })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
})
})