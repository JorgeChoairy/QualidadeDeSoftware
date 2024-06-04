
/*/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given("que acesso o site do governo", () => {
    cy.visit('https://www.gov.br/pt-br')
})

When("eu navego para a seção de Simplifique", () => {
    cy.get('.fa-bars').click()
    cy.get('#main-navigation > .list-navigation > :nth-child(13) > .plain').click()
})

Then("verifico os botões visíveis", () => {
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
*/

/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given("que acesso o site do governo", () => {
    cy.visit('https://www.gov.br/pt-br')
})

When("eu clico no {string}", (menu) => {
    cy.get('.fa-bars').should('be.visible').click()
})

When("seleciono o link {string}", (link) => {
    cy.get('#main-navigation > .list-navigation > :nth-child(13) > .plain').should('be.visible').click()
})

Then("verifico se os textos e imagens estão corretos e visíveis", () => {
    cy.fixture('Dados_botao.json').then((dados) => {
        dados.botoesVisiveis.forEach((botao) => {
            cy.get(`:nth-child(${botao.indice}) > .govbr-card-content > .front > .titulo`).should('have.text', botao.titulo)
            cy.get(`:nth-child(${botao.indice}) > .govbr-card-content > .front > .fas`).should(botao.iconeVisivel ? 'be.visible' : 'not.be.visible')
            cy.get(`:nth-child(${botao.indice}) > .govbr-card-content`).should(botao.conteudoVisivel ? 'be.visible' : 'not.be.visible')
        })
    })
})








