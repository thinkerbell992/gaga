import 'cypress-iframe'


describe("handling frames",()=>{

it('approach1',()=>{
cy.visit("https://the-internet.herokuapp.com/iframe");

const iframe= cy.get("#mce_0_ifr") //iframe je textbox kao za pisanje komentara ili odgovora ,
.its('0.contentDocument.body')   // 0 je sto je u ovom slucaju jedan dokument unutar tog body koji postoji
.should('be.visible')
.then(cy.wrap)

iframe.clear().type('welcome'); // ovo ne radi!!!

})

it('approach2- using custom command',()=>{
    cy.visit("https://the-internet.herokuapp.com/iframe");

    cy.getIframe('#mce_0_ifr').clear().type("Welcome {cmd+a}");  //iframe je setovan u commands.js file i onda ga ovde samo pozivamo ne treba da pravimo metodu za njega
    
    cy.get("[aria-label='Bold']").click();
    

})


it.only('approach3- using cypress-iframe plugin',()=>{
    cy.visit("https://the-internet.herokuapp.com/iframe");

    cy.frameLoaded('#mce_0_ifr');   //load frame ovde ga samo loadujemo nema unosa teksta
    cy.iframe('#mce_0_ifr').clear.type("welcome")      //ovim interagujemo sa frame

})


})