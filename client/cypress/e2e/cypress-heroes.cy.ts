describe('Home Aplicação Cypress Heroes', () => {
  
  it('Validar acesso à funcionalidade “Conecte-se”', () => { //CT-03
    cy.visit('http://localhost:3000/heroes')
    //cy.get('selector').should('be.visible')
    cy.get('header').contains('Login').click()
    cy.get("[name='email']").type('teste@teste.com')
    cy.get("[name='password']").type('12345')
  });

  it('Validar tentativa de curtir herói sem autenticação', () => { // CT-04
    cy.visit('http://localhost:3000/heroes')
    cy.get("[data-cy='like']").eq(0).click()
    cy.contains('You must log in to like.').should('be.visible')
  });
});