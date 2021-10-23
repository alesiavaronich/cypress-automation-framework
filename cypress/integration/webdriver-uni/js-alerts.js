/// <reference types="Cypress" />

describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#button1').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })

    });

    it("Validate js confirm alert box works correctly when clicking on ok", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#button4').click()

        cy.on('window:alert', (str) => {
            return true; // we are asking cypress to manually click on default button ('OK')
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })

    // Notice two changes in the following test:
    // 1) instead of window:alert we are going to use window:confirm
    // 2) instead of return true we are going to use return false to ask Cypress to select 'cancel' (non-default) button
    it("Validate js confirm alert box works correctly when clicking on Cancel", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
            return false;
        })

        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })

    it.only("Validate js confirm alert box using a stub", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

        // We are going to link our event to the stub: when the event gets fired,
        // We are goint to use the stub to record and store the result of the event in the stub
        const stub = cy.stub()
        cy.on('window:confirm', stub)

        // Our stub is going to assure that our js alert is being called with the correct message
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    })
});


