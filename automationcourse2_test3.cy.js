describe('my tird test suite', function()
{
it('my third case', function() {

cy.get("https://rahulshettyacademy.com/AutomationPractice")

cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')  //za chekcbox se radije koristi ova moze i clcik() , be je bihevioral proveravamo da li je nesto ili ne cekirano napisano
//kako proveravamo da je ova opcija ona koja nam treba da ne bi opet should stavimo and da se nadoveze i ide have.value i onda nadjemo value u css

//kako da se odcekira
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    //multiple checkboxes, nadjemo zajednicku vrednost za sve u ovom slucaju type za type se ovako pise input[type$='checkbox']
cy.get("input[type$='checkbox']").check(['option2','option3'])  //ali sada unutar check array of arg ubacimo tj tag u ovom slucaju

// dropdown static opcije iz dropdown a, i drugi gde prvo pretrazimo nesto pa nam izadju opcije dinamicki dropdown

//static dropdown po defoltu koja rec je pre odabira mozemo nju pozvati

cy.get('select').select('option2').should('have.value', 'option2')

// dinamic u glavnom ce opcije koje iskoce biti unutar <li> svaka svoj , kada ulazimo u li child to parent formiramo sa razmakom, i iteriramo kroz sve


cy.get('#autocomplete').type('ind')
cy.get('@productLocator').find('.product').each(($el, index, $list) => {

if($el.text() ==="India")
{
    cy.wrap($el).click()
}
})
cy.get('#autocomplete').should('have.value','India')

// element dispalyed visible not visible
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

//radio button ako uzimamo atribut onda ide [value-"radio2"]
cy.get('[value-"radio2"]').check().should('be.checked')

})

})