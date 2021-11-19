/// <reference types="Cypress" />
import Alerts_PO from '../../support/pageObjects/webdriver-uni/Alerts_PO';
const alerts = new Alerts_PO();


describe("Handle js alerts", () => {

    beforeEach(() => {
        cy.visitHomepage()
        cy.getAlertsWindow();
    })

    it("Confirm js alert contains the correct text", () => {
        alerts.clickJavaScriptAlertBtn()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    });

    it("Validate js confirm alert box works correctly when clicking on ok", () => {
        alerts.clickJavaScriptConfirmBoxBtn()
        cy.on('window:confirm', (str) => {
            return true;
        })
        alerts.getConfirmationOk()
    })

    it("Validate js confirm alert box works correctly when clicking on Cancel", () => {
        alerts.clickJavaScriptConfirmBoxBtn()
        cy.on('window:confirm', (str) => {
            return false;
        })
        alerts.getConfirmationCancel()
    })

    it("Validate js confirm alert box using a stub", () => {
        const stub = cy.stub()
        cy.on('window:confirm', stub)

        alerts.clickJavaScriptConfirmBoxBtn().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            alerts.getConfirmationOk()
        })
    })
});


