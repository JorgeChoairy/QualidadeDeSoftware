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

Then("verifico se a categoria {string} está presente na navegação", (categoria) => {
    cy.get(':nth-child(6) > .plain').should('be.visible').click()
    cy.get(':nth-child(1) > .titulo > a > .contenttype-link').should('be.visible')
})