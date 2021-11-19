class Homepage_PO {
    visitHomepage() {
        return cy.visit(Cypress.env("webdriveruni_homepage"), {timeot: 60000});
    }

    clickOn_ContactUs_Button() {
        return cy.get('#contact-us').invoke("removeAttr", "target").click({force: true}, {timeot: 8000});
    }
}
export default Homepage_PO;
