/// <reference types="Cypress" />

describe("Test mouse actions", () => {

    beforeEach(() => {
        cy.visitHomepage()
        cy.getActionsWindow()
    })

    it("It should be able to drag and drop a draggable item", () => {
        cy.grabItem()
        cy.dragAndDropItem()
    });

    it("It should be able to perform a double mouse click", () => {
        cy.dblclickBox().then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(147, 203, 90)')
        })
    });

    it("It should be able to click and hold down the left mouse button on a given element", () => {
        cy.clickAndHoldBox().then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    });

});
