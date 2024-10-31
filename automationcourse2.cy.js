describe('my first test suite', function()
{

it('my first case', function() {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product').should('have.length',5)  //ovde smo stavili  5 da bi prosao test 5ti je taj nevidljiv na strani
    cy.get('.product:visible').should('have.length', 4)   // moze da se desi da nesto nije vidljivo na strani i detektuje vise necega u tom slucaju dodajemo :visible

    //parent child chaining
    cy.get('.products').as('productLocator') // as varijabla koja se koristi da kada jednom deklarisemo neku mapiranu vrednost i da je na dalje nam treba ne deklarisemo svaki put nego pozivamo  
    cy.get('@productLocator').find('.product').should('have.length', 4) //ovde je ceo skup proizvoda products prvo dohvacen pa je onda proizvod selektovan i receno prebroji 4 u okviru products selekcije da ne bi bilo tih nevidljivih koje uhvati da prave gresku
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()  //kad deifinisemo prozvode trazimo preko eq 2
    console.log('sf')
    cy.get('@productLocator').find('.product').each(($el, index, $list) =>{      //$el to znaci kad smo gore definisali da ih ima 4 sad on uzima u el prvi , index je 0 u smislu krece od 0 (to je prvi u nizu), list  je lista od ovih 4
//sad se krecemo od prvog selektovanog objekta do njegovog naziva tj sad ce da navigira posto product-name ima ih vise u globalu ovom h4.product-name je 
//definisao samo onih 4 ali ova each petlja ce selektovati 1 po 1 i proci tu listu od 4 
      const texVege=$el.find('h4.product-name').text()
        if(texVege.includes('Cashews'))
        {
         cy.wrap($el).find('button').click()   //posto $el vise ne moze da se koriti click metoda tj u if-u ubaci se wrap($el) da se zaobidje
        }
    })
    /*
    const logo= cy.get('.brand')  varijabla napisana - ne moze ovako da se resi mora funkcija , jer ovo nije cypress komanda i zato se ubacuje 
    cy.log(logo.text())             then metoda , jer on ovo ne prepoznaje 
    */ 
    cy.get('.brand').then(function(logoelement)
    {
        cy.log(logoelement.text())           //text() isto nije cypress komanda to je jquery ali je cypres podrzava
    })


    

    
})
})
