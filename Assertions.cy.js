

describe ("Assertions" , () =>  {


    it("Implicit Assertions", () =>{

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//should   and
// cy.url - vraca url koji smo navigirali , 'include' parametar drugi sta treba da bude tu,  "eq" je jednako necemu npr url kome pristupamo, 'contain' slicno kao include moze rec
//cy.url().should('include', 'orangehrmlive.com')
//cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//cy.url().should('contain', 'rangehrmlive')
//url ne mora svaki put moze prvi put da se uhvati posle samo .should

/*
cy.url().should('contain', 'rangehrmlive')
.should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
.should('contain', 'rangehrmlive') 


// umesto stalno should kada imamo vise stvari vezanih moze and 

cy.url().should('contain', 'rangehrmlive')
.and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
.and('contain', 'rangehrmlive')

//negative
.and('not.contain', 'rf5f5f5')

cy.title().should('include', 'Orange')
.and('eq', 'OrangeHRM')
.and('contain', "HRM")

// ovde u should dodajemo samo ono sto zelimo da proverimo jer ovde pozivamo element preko css drugacija upotreba
cy.get('.orangehrm-login-branding > img').should('be.visible')
.and('exist')
//  //a bi trbealo da locira/vrati sve linkove na strani 

cy.xpath("//a").should('have.length', '5')   //no links

cy.get("input[placeholder='Username']").type("Admin")  //provide value into inbox

cy.get("input[placeholder='Username']").should('have.value', 'Admin') //kad je upisemo iznad proverimo ovom komandom dal je ok
 })
*/
}) 


it("Explicit Assertions", () =>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()



    //   let - use to define variable
    let expName='mandasachin user'
    

    //function
    cy.get(".oxd-userdropdown-name").then( (x) =>{

        let actName=x.text()
        expect('actName').to.equal(expName)  //positive bdd assertion
        expect('actName').to.not.equal(expName)  //negative bdd assertion



        //TDDstyle assertions

        assert.equal(actName,expName)
        assert.notEqual(actName,expName)


    })




    })

})
