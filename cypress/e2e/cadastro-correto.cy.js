describe('Pagina de cadastro, cenário de cadastro com sucesso',() => {
    beforeEach(()=>{
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');

    })
    it('Deve realizar cadastro com sucesso', () => {
    cy.getByData('register').click()    
    cy.getByData('email').type('estela@gmail.com')
    cy.getByData('fullName').type('estela f')
    cy.getByData('registerUserName').type('estelaf')
    cy.getByData('registerPassword').type('13579est')
    cy.getByData('btnRegister').click()    
    })
})