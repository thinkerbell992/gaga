

describe('handle tab-approach ', ()=>{   //('arrow function', ()=>{}) = ovo se zove arrow function

it.skip('Approach1- tab',()=>{

cy.visit('https://the-internet.herokuapp.com/windows')

// kada imamo situaciju da hocemo da mapiramo text link  mozemo na dva nacina mapiramo --css-  a[href='/windows/new']
//<div class="example" xpath="1"==$0
// <h3>opening a new window</h3>
// <a href="/windows/new", target="_blank">Click here </a>    ---a moze i da se pozove preko parent klase ---   .example >a

//target='_blank' >click here --- target se izgleda koristi da se otvori strana u novom tabu tj kad imamo target znamo da otvara novi tab za klik na link
//posto ovde u tekstu imamo target i ako hocemo da ga uklonimo (posto koliko razumem cypress ne hendla novi tab) 
//postoji opcija da se obidje da se otvori u istom, koristi sse invoke('removeAttr', 'target').click();

cy.get('.example >a').invoke('removeAttr', 'target').click();
cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
//operations
cy.wait(5000);
cy.go('back'); //ovo vraca na parent tab

}) 
it('Approach2- tab',()=>{

    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.get('.example >a').then((e) =>{      //then((e)=>{})   - je jquery funkcija, (e)-dakle sta god se storuje u e -element i hvata

        let url=e.prop('href');  //ovom komandom pristupamo url-u tj delu url koji ce otvoriti  na klik na tekst link novi tab za ovaj nacin domen tj pocetni link treba da bude isti
        cy.visit(url);
    })
    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
    //operations
    cy.wait(5000);
    cy.go('back'); //ovo vraca na parent tab
    
})
})