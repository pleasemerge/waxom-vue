// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})

describe('My second test', () => {
  it('Check h2', () => {
    cy.visit('/')
    cy.contains('h2', 'Just a test')
  })
})