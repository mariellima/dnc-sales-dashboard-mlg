describe('Check if create profile page renders the correct components', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/login').as('loginRequest') // intercepta antes de visitar
    cy.visit('http://localhost:5173/cadastro')
  })

  it('should steps 1 and 2 works', () => {
    cy.get('input[type="text"]').type('Tester Cypress')
    cy.get('input[type="email"]').type('tester@teste.com')
    cy.get('input[type="tel"]').type('123456789')
    cy.get('button[type="submit"]').should('not.be.disabled').click()
    cy.get('input[type="password"]').type('Presunto@123')
    cy.get('button[type="submit"]').should('be.visible')
  })
})
