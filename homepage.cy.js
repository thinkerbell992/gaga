//declare calss name
class HomePage
{
getEditBox()//declare a metod
{
    return cy.get('.form-group:nth-child(1)')
}
getTwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')
}
getGender()
{
   return cy.get('select')
}
getEnterepreneur()
{
    return  cy.get('#inlineRadio3')
}

}
/*getShopTab()    --ovja neradi nesto tako da preskacem ne moze da se mapira dugme
{
   return cy.get(':nth-child(2) > .nav.link')
}*/

//ako hocemo da exposzujemo klasu i da bude available drugim folderima i fajlovima
export default HomePage;