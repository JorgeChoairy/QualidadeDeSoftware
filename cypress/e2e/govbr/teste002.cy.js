/*/// <reference types="Cypress" />

describe('Acesso ao site do governo', function() {
    beforeEach(() =>{
      cy.visit('https://www.gov.br/pt-br')
    })
    it("Imagem da área: Empresas & Negócios",()=> {
  
        cy.get('.fa-bars').click() //https://www.gov.br/empresas-e-negocios/pt-br
    
        cy.get('#main-navigation > .list-navigation > :nth-child(12) > .plain').click()
    
    
        cy.get('#eb0a953f-86c2-4f96-9891-f1484f0b1ab6 > .nitf-basic-tile > .imag').should('be.visible')
    
        cy.get('#f834d2f9-c39e-4144-bc4c-b0278701e01b > .nitf-basic-tile > .imag').should('be.visible')
    
        cy.get('#d249f6f9-5f09-4f13-a265-84d23c7ad59a > .nitf-basic-tile > .imag').should('be.visible')
    
        cy.get('#e2183f18-4544-4580-ba0a-4e32916ae685 > .nitf-basic-tile > .imag').should('be.visible')
    
        cy.get('#e2183f18-4544-4580-ba0a-4e32916ae685 > .nitf-basic-tile > .imag').should('be.visible')
    
        cy.get('#e2183f18-4544-4580-ba0a-4e32916ae685 > .nitf-basic-tile > .imag').should('be.visible')
    
        cy.get('#e2183f18-4544-4580-ba0a-4e32916ae685 > .nitf-basic-tile > .imag').should('be.visible')
    
        cy.get('#ea6db35a-92b6-419c-b905-cf010829560c > .nitf-basic-tile > .imag').should('be.visible')
   
        cy.get('#be650efa-1ef9-4fd8-a3d7-b2bdad85f08a > .nitf-basic-tile > .imag').should('be.visible')
    
        cy.get('#cff1e7fa-07d5-40e1-8ab3-3caeb76ebba6 > .nitf-basic-tile > .imag').should('be.visible')
    
        cy.get('#be8530c9-fd17-4c41-801c-05ad209d39f9 > .nitf-basic-tile > .imag').should('be.visible')
    
        })
    })

*/

/// <reference types="Cypress" />

describe('Verificação da visibilidade das imagens da área "Empresas & Negócios"', function() {
    beforeEach(() => {
        cy.visit('https://www.gov.br/pt-br')
    })
    
    it("Imagem da área: Empresas & Negócios", () => {
        cy.get('.fa-bars').should('be.visible').click() 
        cy.get('#main-navigation > .list-navigation > :nth-child(12) > .plain').should('be.visible').click()

        cy.fixture('Dados_imagem.json').then((dados) => {
            dados.imagensVisiveis.forEach((seletor) => { 
                cy.get(seletor + ' > .nitf-basic-tile > .imag').should('be.visible')
            })
        })
    })
})

