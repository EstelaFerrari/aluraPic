describe('Pagina de login, cenário incorreto', () => {
  beforeEach(()=>{
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
  })

  it('Deve verificar as mensagem de dados obrigatórios no login', () => {
    cy.getByData('loginUserName').type('erro')
    cy.getByData('loginPassword').type('erro')
    cy.getByData('loginBtn').click()

    cy.on('window:alert',(msg) => {
      expect(msg).to.contains('Invalid user name or password')
    })
    cy.get('.text-danger').contains('User name is required!');
    cy.get('.text-danger').contains('Password is required!');
  })


})