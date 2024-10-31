

describe('RadionButtons&Checkboxes', () =>{
/*
    it("Checking Radio buttons", () =>  {
cy.visit("https://artoftesting.com/samplesiteforselenium")

//visibility radio buttons
cy.get("input#male").should("be.visible")
cy.get("input#female").should("be.visible")


//selecting radion buttons
cy.get("input#male").check().should('be.checked')
cy.get("input#female").should('not.be.checked')


cy.get("input#female").check().should('be.checked')
cy.get("input#male").should('not.be.checked')


    })
    */

    it("Checking check boxes", () =>  {
        cy.visit("https://artoftesting.com/samplesiteforselenium")
        

        //visibilitiy of element
   // cy.get("input[value='Automation']").should('be.visible')
    
    //selecting single checkbox 
   // cy.get("input[value='Automation']").check().should('be.checked')

    //unselect checkbox
    //cy.get("input[value='Automation']").uncheck().should('not.be.checked')

    //selecting all checkboxes
     //   cy.get("input[type='checkbox']").check().should('be.checked')

     //   cy.get("input[type='checkbox']").uncheck().should('not.be.checked')

        //select first or last checkbox
        cy.get("input[type='checkbox']").first().check()  //moze i ne mora da se doda   should('be.checked')
        cy.get("input[type='checkbox']").last().check().should('be.checked')

        
    
        
            })

})