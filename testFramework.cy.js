import HomePage from "..C:\Users\dragana.krstic\cypress automation\cypress\e2e\pageObjesct.cy.js\homepage.cy.js"

describe('test framework', function()
{
   before(function(){
        //fixture folder se koristi da se stave stvari poput name i gender tamo i setuju vrednosti
        //runs once before all tests in the block
        cy.fixture('example').then(function(data){  //.fixture je folder koji pozivamo a 'example je ima fajla u folderu
        
            this.data=data  //preslusati opet ovaj deo pri kraju 49lekcija
        })
        })
    
it('before and after', function() {
    const HomePage = new HomePage();

cy.visit('https://rahulshettyacademy.com/angularpractice/')

HomePage.getEditBox().type(this.data.name)  //type('Bob') ili type(data.name)  cy.get('input[name="name"]:nth-child(2)) ovi tr u klasi se menjaju pa je bolje po necemu drugom da se mapira
//ako hocemo da sada koristimo ovaj fixture gde smo setovali vrednosti mozemo umesto datog imena da ubacimo 'data.name'
HomePage.getGender().select(this.data.gender)  
HomePage.getTwoWayDataBinding().should('have.value',this.data.name)
HomePage.getEditBox().should('have.length',1) //ovde nesto ne valja nije najbolje uradjeno attr je skracenica od atribute , minleght 2 je vrednost ali je odvojen naziv od vrednosti ovde
HomePage.getEnterepreneur().should('be.disabled')
// ne mogu da mapiram ne vidi nth child cy.get(':nth-child(2) > .nav.link').click()
//cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
cy.selectProduct('Blackberry').click()

//posto ovo necemo da bude harcodovana vrednost uvek blackberry napravicemo funkciju koju cemo pozivaty iz commands foldera


    

    



//ako je behavior onda ide should be a ako je property should have
this.data.selectProduct(element)

})
})

