describe('Login Flow Correct Credentials', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/login').as('loginRequest') // intercepta antes de visitar
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with valid credentials', () => {
    cy.get('input[type="email"]').type('manuaaaleis@dnc.com.br')
    cy.get('input[type="password"]').type('Presunto@123')
    cy.get('button[type="submit"]').should('not.be.disabled').click()

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)
    cy.url({ timeout: 10000 }).should('include', '/home')
    cy.get('header').should('be.visible')
  })
})

describe('Login Flow Invalid Credentials', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/login').as('loginRequest') // intercepta antes de visitar
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should show error with invalid credentials', () => {
    cy.get('input[type="email"]').type('leidaestre@dnc.com.br')
    cy.get('input[type="password"]').type('Presunto@8974')
    cy.get('button[type="submit"]').should('not.be.disabled').click()

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 401)
    cy.contains('Email ou senha inválidos').should('be.visible')
  })
})
