//quando se faz apenas 1 teste.
//caso ao contrario tera que colocar "cy.visit" em todos os testes

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
//   })
// })

// para mais de 1 teste é melhor usar "beforeEach"
describe ('Pagina de cadastro, cenário de cadastro incorreto', () => {
  beforeEach(()=>{
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
  })

  it('Deve cadastrar com sucesso uma foto', () => {
    cy.get('.fa-plus-circle').click();
    cy.get('[type="file"]').selectFile('dica.png', {force:true})
    cy.get('[placeholder="photo description"]').type('seliga');
    //cy.get('[type="checkbox"]').click;
    cy.get('[type="submit"]').click();
    cy.contains('Upload complete').should('be.visible');
    cy.get('.fa-home').click;
    cy.get('.img-thumbnail').should('have.length', 1)
    //cy.wait(1000)
  })


})
