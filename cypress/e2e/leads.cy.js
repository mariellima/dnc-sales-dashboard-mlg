describe('Check if create profile page renders the correct components', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/login').as('loginRequest') // intercepta antes de visitar
    cy.login('manuaaaleis@dnc.com.br', 'Presunto@123')
    cy.visit('http://localhost:5173/leads')
  })

  it('should display leads form', () => {
    cy.get('form').should('be.visible')
    cy.get('input[type="text"]').should('be.visible')
    cy.get('input[type="email"]').should('be.visible')
    cy.get('input[type="tel"]').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  })

  it('should display leads title', () => {
    cy.get('#leads-title').should('be.visible')
  })
})
