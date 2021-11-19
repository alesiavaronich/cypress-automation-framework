/// <reference types="Cypress" />
import Radiobuttons_PO from '../../support/pageObjects/webdriver-uni/Radiobuttons_PO';
const radiobuttons = new Radiobuttons_PO();


describe("Verify radio buttons via webdriveruni", () => {

    beforeEach(() => {
        cy.visitHomepage()
        cy.getRadiobuttonsWindow()
    })
    
    it("Check specific radio buttons", () => {
        radiobuttons.getRadiobuttonsBox().eq(1).check()
    });

    it("Validates state of specific radio buttons", () => {
        radiobuttons.getValueLettuce().should('not.be.checked')
        radiobuttons.getValuePumpkin().should('be.checked')

        radiobuttons.getValueLettuce().check().should('be.checked')
        radiobuttons.getValuePumpkin().should('not.be.checked')

        radiobuttons.getValueCabbage().should('be.disabled')

    });
    

});