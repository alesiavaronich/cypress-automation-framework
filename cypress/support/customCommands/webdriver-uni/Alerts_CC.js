import Alerts_PO from '../../pageObjects/webdriver-uni/Alerts_PO';
const alerts = new Alerts_PO();

Cypress.Commands.add("getAlertsWindow", () => {
    alerts.getAlertsWindow().invoke('removeAttr', 'target').click({ force: true })
})