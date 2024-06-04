/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given("que acesso o site do governo", () => {
    cy.visit('https://www.gov.br/pt-br')
})

When("eu clico no menu", () => {
    cy.get('.fa-bars').should('be.visible').click()
})

When("seleciono o link {string}", (link) => {
    cy.contains('a', link).should('be.visible').click()
})

Then("verifico se a página de {string} está funcionando", (pagina) => {
    cy.url().should('include', pagina.toLowerCase())

    cy.contains('h1, h2, h3', pagina).should('be.visible')
})