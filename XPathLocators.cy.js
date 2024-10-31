

describe('XPathLocators', () =>{


it('find no of products', () =>{

cy.visit("https://www.fashionandfriends.com/rs/brendovi/dsquared2/filter/pol:zene/")

cy.xpath("//ul[@class='products list items product-items row row-col-lg-4 plain-category-list']/li").should('have.length', 5)  //ovde /li znaci lista ovih produkta u browseru ih selektuje svaki




})
})