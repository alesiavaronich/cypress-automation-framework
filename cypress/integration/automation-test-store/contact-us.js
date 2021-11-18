import User from '../../fixtures/User';
import UserFactory from '../../fixtures/UserFactory';

/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    const userOne = new UserFactory().userOne();
    const userTwo = new UserFactory().userTwo();

    beforeEach(function () {
        cy.fixture("userDetails").as("user");
    })

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function (linkText) {
            cy.log("Clicked on link using text: " + linkText.text());
        })

        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(userOne.first_name);
            cy.get('#ContactUsFrm_email').type(userOne.email);
            cy.get('#ContactUsFrm_enquiry').type(userOne.user_enquiry);
        })

        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log('Test has completed!')
    });

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click()

        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(userTwo.first_name);
            cy.get('#ContactUsFrm_email').type(userTwo.email);
            cy.get('#ContactUsFrm_enquiry').type(userTwo.user_enquiry);
        })

        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log('Test has completed!')
    });
})
