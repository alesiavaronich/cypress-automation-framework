/// <reference types="Cypress" />

describe("Verify radio buttons via webdriveruni", () => {
    before(function() {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    })
    it("Check specific radio buttons", () => {
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
    });

    it("Validates state of specific radio buttons", () => {
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')

        cy.get("[value='lettuce']").check().should('be.checked')
        cy.get("[value='pumpkin']").should('not.be.checked')

        cy.get("[value='cabbage']").should('be.disabled')

    });
    

});