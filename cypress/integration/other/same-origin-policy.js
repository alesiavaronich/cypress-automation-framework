/// <reference types="cypress" />


describe("Cypress web security", () => {
    // This test will fail due to the Same Origin Policy
    it("Validate visiting two different domains", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://www.google.com');
    });

    // This test would normally fail due to the Same Origin Policy
    // Cypress restricts visiting superdomains to prevent any security issues
    // However, there is a way to override this limitation for those instances,
    // when user visits another superdomain by utilizing some navigation tools on the page
    // To allow this type of behavior within the same test, one should add the following command in cypress.json
    // { "chromeWebSecurity": false }
    it("Validate visiting two different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });
})