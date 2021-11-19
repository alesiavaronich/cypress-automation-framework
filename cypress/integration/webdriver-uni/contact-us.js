/// <reference types="Cypress" />
import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'


describe("Test Contact Us form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 20000)
    const homepage_PO = new HomePage_PO();
    const contact_Us_PO = new Contact_Us_PO();

    before(function () {
        cy.fixture('example').then(function (data) {
            globalThis.data = data;
        });
    });

    beforeEach(function() {
        homepage_PO.visitHomepage();
        cy.wait(3000);
        homepage_PO.clickOn_ContactUs_Button();
    });

    it("Should be able to submit a successful submission via conact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "Hello. My name is Joe Simple. I'm learning test automation", 'h1', 'Thank You for your Message!');
    });

    it("Should not be able to submit a successful submission via conact us form, all fields required", () => {
        contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, " ", "Hello. My name is Joe Simple. I'm learning test automation", 'body', 'Error: Invalid email address');
    });
});