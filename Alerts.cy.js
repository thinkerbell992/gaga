// katalog evenata  https://www.bing.com/search?pglt=43&q=cypress+events&cvid=f0fe2e9a439c49b5995660399fafc737&gs_lcrp=EgZjaHJvbWUqBggAEAAYQDIGCAAQABhAMgYIARAAGEAyBggCEAAYQDIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQABhAMgYIBxAAGEAyBggIEAAYQDIICAkQ6QcY_FXSAQgyNTM1ajBqMagCALACAA&FORM=ANNAB1&PC=U531 


describe('Alerts', ()=>{

// 1. javascript alert: It will have some text and 'ok' button
it.skip('js alert', ()=>{    //funkcija koja krece iz testa

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsAlert()']").click();

    //da bi smo videli taj alert-popup nakon klika moramo event da trigerujemo window:alert, (t) varijabla ali pravimo metodu, button ce on sam da zatvori
    cy.on('window:alert', (t)=> {

        expect(t).to.contains('I am a JS Alert');

    })
    //alert window automatically closed by cypress, a stavljamo text na validaciju nakon zatvaranja dialoga
    cy.get('#result').should('have.text','You successfully clicked an alert')

})

// 2 javascript confirm alert : it will have some text with 'ok' and 'cancel' buttons
// na it kad dodmao skip onda preskoci, a kad na neki it dodamo only onda samo njega pokrene
it.skip('js confirm(ok button) alert', ()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm', (t)=> {

        expect(t).to.contains('I am a JS Confirm');

    })

    //cypress automatically closed alert window by useing ok buton-default
    cy.get('#result').should('have.text', 'You clicked: Ok')

})

it.skip('js confirm(Cancel button) alert', ()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm', (t)=> {

        expect(t).to.contains('I am a JS Confirm');

    })

    cy.on('window:confirm', ()=> false);   // ()=> arrow function. Cypress closes alert window using cancel button
    cy.get('#result').should('have.text', 'You clicked: Cancel')

})

/* 3 javascript Promt Alert
it.only('js confirm(Cancel button) alert', ()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
   
    cy.window().then((win)=>{  //cy.window() znaci ako je otvoren prozor ovaj koji smo prosledili link onda ...dalje
    
    cy.stub(win, 'promt').returns("welcome")
    })
    cy.get("button[onclick='jsPrompt()']").click();
  
    //event za koriscenje cancle button
    cy.on('window:promt',()=> false);

    cy.get('#result').should('have.text','You entered: null');
})*/



// 4 authenticated alert

it('auth alert', ()=>{
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth:{username: "admin", password: "admin"} });//approach 1


    cy.get("div[class='example'] p").should('have.contain', "Congratulations")

/*
   cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
   cy.get("div[class='example'] p").should('have.contain', "Congratulations")*/
})
})

