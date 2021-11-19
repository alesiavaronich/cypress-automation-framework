import HomePage_PO from '../../pageObjects/webdriver-uni/Homepage_PO';
const homepage = new HomePage_PO();

Cypress.Commands.add("visitHomepage", () => {
    homepage.visitHomepage()
})