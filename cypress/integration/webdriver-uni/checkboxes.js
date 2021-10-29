/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(function() {
        cy.log(Cypress.env("name"))
        cy.navigateTo_WebdriverUni_Checkbox_Page(); // Here we have created a custom command - ref. to 'support/commands.js'
        //cy.navigateTo_WebdriverUni_Homepage(); // Here we have created a custom command - ref. to 'support/commands.js'
        //cy.visit("/"); // a baseUrl was set up - ref. to 'cypress.json'
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    });
    it("Check and validate checkbox", () => {
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(1) > input').check().as('option-1')
        cy.get('@option-1').check().should('be.checked');
    });

    it("Uncheck and validate checkbox", () => {
        cy.get(':nth-child(5) > input').uncheck().as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked');
    });

    it("Check multiple checkboxes", () => {
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Click on all radio buttons', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[value="green"]').check();
        cy.get('[value="blue"]').check();
        cy.get('[value="yellow"]').check();
        cy.get('[value="purple"]').check();
        cy.get('#radio-buttons > [value="orange"]').check();
        /* ==== End Cypress Studio ==== */
    });
});