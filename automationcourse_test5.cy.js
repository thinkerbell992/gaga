describe('my child windows, frames, calendar', function()
{
    
it.skip('how to open new window in same window', function() {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/ ')

// prop() metod jquery  = pomaze da se dobije href vrednost kroz funkciju obilazimo sto je prop jquery
cy.get('#opentab').then(function(el)
{
    
    const url =el.prop('href')
    cy.visit(url)
    cy.origin(url, () =>{    // -----> ovaj deo nesto ne radi

        
        cy.get("div .sub-menu-bar a[href='about.html']").click()
    })
   

   
})

})

it.skip('how to handle frames', function() {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/ ')

    // to handle frames site in site ( site inside frame  npm install -D cypress-iframe ) 
    //koristimo metodu iframe posto smo skinuli, za loadovanje frejmova
    cy.frameLoaded('#courses-iframe')

    cy.iframe().find("li a[href='mentorship']").eq(0).click()
    cy.iframe().find("h1 div[class='inner-box']").should('have.length', "10")   //nesto nije kako treba (41 lekcija)    
})

it('how to handle calendars', function() {
    //declaring variables we should not harcode down in maping elements
    const monthNumber="6"; 
    const date='15';
    const year='2027';

   cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    cy.get('.react-date-picker__inputGroup').click()
    cy.get('.react-calendar__navigation__label__labelText').click()
    cy.get('.react-calendar__navigation__label__labelText').click()
    cy.contains('button',year).click()  // ako je dugme varijabla ne moramo da ga mapiramo mozemo po imenu da nazovemo button on ce tamo u popup calendaru da nadje button(sto je ime godine ) i prosledjujemo mu vrednost godine koje smo gore deklarisali bice 2027
    cy.get('.react-calendar__tile').eq(Number(monthNumber)-1).click()  //mothNumber -1 posto indeks krece od 0 onda ovu vrednost gore sto smo definisali sa 6-1 kad stavimo bice dobar lokator na mesec
    cy.contains('abbr',date).click()  // ovde smo isto kao za dugme uradili iskoristili smo pocetak abbr posto svakako prosledjujemo tacan broj nije bitno da mapiramo koje abbr polje hocemo
    
  //assertion
  cy.get('.react-date-picker__inputGroup__input').each(($el, index) =>{


    cy.log(cy.wrap($el).invoke('val'))
  })   //da iteriramo kroz elemente each, i poredimo nije mi janso
  

})
})
