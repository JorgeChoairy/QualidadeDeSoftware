/// <reference types="cypress" />

describe('Verificação da presença da categoria "Acessibilidade" na página navegação', function() {
    beforeEach(() => {
      cy.visit('https://www.gov.br/pt-br')
    })
  
    it('Verifica se a categoria "Acessibilidade" está presente na navegação', () => {
      cy.get('.fa-bars').should('be.visible').click()
      cy.get('#main-navigation > .list-navigation > :nth-child(6) > .plain').should('be.visible').click()
      cy.get(':nth-child(1) > .titulo > a > .contenttype-link')
    })
  })