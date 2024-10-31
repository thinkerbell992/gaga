describe('Handling child windows, web tables, mouse hovers, alert', function()
{
it.skip('should handle child window', function() {

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('#opentab').invoke('removeAttr', 'target').click() //invoke je funkcija hocemo da izvrsimo jquery funckiju da bi uklonili neki atribut stavimo function name i 
                                                  //atribut ovde je targed koji otvara u novi tab a moze i u novi tab da otvroi bez invoke 


// cypress ne dozvoljava rad na drugoj strani koja se otvori ako je unet samo gore ovaj prvi sajt tako da ovo nece raditi ako nas na klik navigira na drugu stranu odnosno neki drugi domen ili sajt i nastavimo tamo da testiramo funkcije 
// da bi se to premostilo onda moramo da podesimo novi origin unutar funkcije onda radimo dalje:
cy.origin('https://www.qaclickacademy.com/', ()=>
{
    cy.get("#navbarSupportedContent [href='about.html']").click()
    cy.get('.mt-50 h2').should('contain', 'Welcome to QAClick Academy ')
})

})

it.skip('should handle web tables- tabele podataka', function() {
// da bi smo u tablei podataka pronasli neki podatak moramo da skeniramo celu tabelu i da prodjemo redove i kolone da pronadjemo teks koji hocemo i onda da ocitamo podatke (jer ne moze fiksno mozda se izmeni u tabeli mesto na kom je podatak)
// da bi selektovali vrednost iz sledece kolone koristimo next a pre toga skeniramo po imenu kolonu pored (predavanje 37.)
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

cy.get("tr td:nth-child(2)").each(($el,index ,$list) =>{
    
   const text = $el.text()   //ako hocu da zgrabim tekst moze var - varijabla ili const - konstanta i kazem tekst mislim na teks tiz kolone
    if (text.includes('Python'))  //text.include regular expression
    {
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)  //eq equals index ideks koji je u if-u nasao rec python
        {                                                                   //unutar funkcije resavamo text jer je on jquery a mi koristimo css pa mora da se zaobidje
           const priceText = price.text();
           expect(priceText).to.equal('25')
        })
    }
})  
})  
   
it('should handle mouse over', function() {

// mouse over u css-u nije podrzan, ali u jquery postoji metoda show (predavanje 39)
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

cy.get('div .mouse-hover-content').invoke('show')    //posto je show jquery funkcija koristimo invoke kako bi smo iskoristili ovde u css da bi otkrili elemente
cy.contains('Top').click()  //  ovo je za elemnte koji nisu hidenu zagradi click stavimo ((force:true)) stim sto nam ne treba ova linija iznad a donja linija ostaje 
cy.url().should('include', 'top')


})
})