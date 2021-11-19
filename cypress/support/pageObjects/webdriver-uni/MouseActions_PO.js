class MouseActions_PO {

    getActionsWindow() {
        return cy.get('#actions')
    }

    getDblclickBox() {
        return cy.get('#double-click')
    }

    getDraggable() {
        return cy.get('#draggable')
    }

    getDroppable() {
        return cy.get('#droppable')
    }

    getClickBox() {
        return cy.get('#click-box')
    }
     
}

export default MouseActions_PO;