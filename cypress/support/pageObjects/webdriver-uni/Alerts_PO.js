class Alerts_PO {
    getAlertsWindow() {
       return cy.get('#popup-alerts')
    }

    clickJavaScriptAlertBtn() {
        return cy.get('#button1').click()
    }

    clickModalPopupBtn() {
        return cy.get('#button2').click()
    }

    clickAjaxLoaderBtn() {
        return cy.get('#button3').click()
    }

    clickJavaScriptConfirmBoxBtn() {
        return cy.get('#button4').click()
    }

    getConfirmationOk() {
       return cy.get('#confirm-alert-text').contains('You pressed OK!')
    }

    getConfirmationCancel() {
        return cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    }

}
export default Alerts_PO;