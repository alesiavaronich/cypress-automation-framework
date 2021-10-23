/// <reference types="Cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific via select dropdown lists", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng') // selected based on teh option's value attribute
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery') // selectted based on the option's text
    });

});