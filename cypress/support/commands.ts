/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(email: string, password: string): Chainable<void>
  }
}

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
    cy.intercept('POST', '**/login').as('loginRequest') // intercepta antes de visitar
    cy.visit('http://localhost:5173/')
    cy.get('input[type="email"]').type(username)
    cy.get('input[type="password"]').type(password)
    cy.get('button[type="submit"]').should('not.be.disabled').click()
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)
    cy.url({ timeout: 10000 }).should('include', '/home')
    })
})
