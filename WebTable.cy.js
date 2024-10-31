describe('webtable', ()=>{

    it('WebTable', ()=>{

cy.visit('https://demo.opencart.com/admin/index.php?route=common/login');
cy.wait(10000);
cy.get("#input-username").type("demo");
cy.get("#input-password").type("demo");
cy.get("button[type='submit']").click();  // kada mapiramo tag neki ovako ide  


//customers > sustomers menu
cy.get("#menu-customer>a").click();  //ovo >a u css-u navigiramo na id preko # i onda silazimo u <a></a> preko te >
cy.get("#menu-customer>ul>li:first-child").click();   // ovim > se krecemo kroz css <a>, <ul>, <li> kada ima nekoliko stavki u dropdown :first-child itd koristimo

})
})