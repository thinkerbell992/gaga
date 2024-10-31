

describe ('CSSLocators', () => {

it("CSSLocators", () => {

    cy.visit("https://www.fashionandfriends.com/rs/")

    //get is for css only 
    cy.get("[name='q']").type("T-SHIRT")  //atribute
 
    cy.get(".action-search").click()    //class

    cy.get(".base").contains("T-SHIRT")



})



})