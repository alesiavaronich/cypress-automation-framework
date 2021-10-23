import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'
/// <reference types="Cypress" />

// In the following tests we are going to use custome commands to fill out the forms with user information.
// The commented out code within the tests was transfered to the custom commands located in support/Commands.js
// Also, we are going to store and retrieve user info from fixtures/userDetails.json file

describe("Test Contact Us form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 20000)
    const homepage_PO = new HomePage_PO();
    const contact_Us_PO = new Contact_Us_PO();

    before(function () {
        cy.fixture('example').then(function (data) {
            //this.data = data; // we initialize our example.json file
            globalThis.data = data; // if you run into issues with the previous command, use this one instead
        });
    });

    beforeEach(function() {
        // cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html");
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        // cy.get('#contact-us').invoke("removeAttr", "target").click({force: true});
        homepage_PO.visitHomepage();
        cy.wait(3000);
        homepage_PO.clickOn_ContactUs_Button();
        //cy.pause();
    });

    it("Should be able to submit a successful submission via conact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        //cy.get('#contact-us').click({force: true})
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('[name="email"]').type(data.email);
        // cy.get('textarea.feedback-input').type("Hello. My name is Joe Simple. I'm learning test automation")
        // cy.get('[type="submit"]').click()
        // cy.get('h1').should('have.text', 'Thank You for your Message!')
        //cy.webdriverUni_ContactForm_Submission(
            // Cypress.env("first_name"), 
            // data.last_name, 
            // data.email, 
            // "Hello. My name is Joe Simple. I'm learning test automation", 
            // 'h1', 
            // 'Thank You for your Message!');
            contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "Hello. My name is Joe Simple. I'm learning test automation", 'h1', 'Thank You for your Message!');
    });

    it("Should not be able to submit a successful submission via conact us form, all fields required", () => {
        // cy.get('[name="first_name"]').type("Tom")
        // cy.get('[name="last_name"]').type("Simple")
        // cy.get('textarea.feedback-input').type("Hello. My name is Joe Simple. I'm learning test automation")
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('Error: all fields are required');
        // cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", "Hello. My name is Joe Simple. I'm learning test automation", 'body', 'Error: Invalid email address');
        contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, " ", "Hello. My name is Joe Simple. I'm learning test automation", 'body', 'Error: Invalid email address');
    });
});