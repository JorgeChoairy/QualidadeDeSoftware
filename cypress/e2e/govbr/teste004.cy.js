/// <reference types="cypress" />

describe('Verificação da página "Notícias"', function() {
    beforeEach(() => {
      cy.visit('https://www.gov.br/pt-br')
    })
  
    it('Verifica se a página "Notícias" está funcionando', () => {
      cy.get('.fa-bars').should('be.visible').click()
      cy.contains('Notícias').should('be.visible').click()
      cy.url().should('include', 'noticias')
      cy.contains('h1, h2, h3', 'Notícias').should('be.visible')
    })
  })