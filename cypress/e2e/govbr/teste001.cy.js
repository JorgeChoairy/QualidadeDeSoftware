/*/// <reference types="Cypress" />

describe('Acesso ao site do governo', function() {
    beforeEach(() =>{
      cy.visit('https://www.gov.br/pt-br')
    })
    
      it("Botões da área: fluxo do simplifique",()=> {
  
      cy.get('.fa-bars').click() //https://www.gov.br/fazenda/pt-br/canais_atendimento/ouvidoria/simplifique/simplifique
    
      cy.get('#main-navigation > .list-navigation > :nth-child(13) > .plain').click()
     
      cy.get(':nth-child(1) > .govbr-card-content > .front > .titulo').should('have.text', 'Formas de Acesso')
      cy.get(':nth-child(1) > .govbr-card-content > .front > .fas').should('be.visible')
      cy.get(':nth-child(1) > .govbr-card-content').should('be.visible')
  
      cy.get(':nth-child(2) > .govbr-card-content > .front > .titulo').should('have.text', 'Base Legal')
      cy.get(':nth-child(2) > .govbr-card-content > .front > .fas').should('be.visible')
      cy.get(':nth-child(2) > .govbr-card-content').should('be.visible')
  
      cy.get(':nth-child(3) > .govbr-card-content > .front > .titulo').should('have.text', 'Carta de serviços')
      cy.get(':nth-child(3) > .govbr-card-content > .front > .fas').should('be.visible')
      cy.get(':nth-child(3) > .govbr-card-content').should('be.visible')
  
      cy.get(':nth-child(4) > .govbr-card-content > .front > .titulo').should('have.text', 'Relatórios')
      cy.get(':nth-child(4) > .govbr-card-content > .front > .fas').should('be.visible')
      cy.get(':nth-child(4) > .govbr-card-content').should('be.visible')
  
    })

})
*/

/// <reference types="Cypress" />

describe('Verificação dos textos e visibilidade das imagens da área "Empresas & Negócios"', function() {
  beforeEach(() =>{
    cy.visit('https://www.gov.br/pt-br')
  })
  
  it("Botões da área: fluxo do simplifique",()=> {
      cy.fixture('Dados_botao.json').then((dados) => {
          cy.get('.fa-bars').should('be.visible').click()
          cy.get('#main-navigation > .list-navigation > :nth-child(13) > .plain').should('be.visible').click()
          
          dados.botoesVisiveis.forEach((botao) => {
              cy.get(`:nth-child(${botao.indice}) > .govbr-card-content > .front > .titulo`).should('have.text', botao.titulo)
              cy.get(`:nth-child(${botao.indice}) > .govbr-card-content > .front > .fas`).should(botao.iconeVisivel ? 'be.visible' : 'not.be.visible')
              cy.get(`:nth-child(${botao.indice}) > .govbr-card-content`).should(botao.conteudoVisivel ? 'be.visible' : 'not.be.visible')
          })
      })
  })
})


