import MouseActions_PO from '../../pageObjects/webdriver-uni/MouseActions_PO';
const actions = new MouseActions_PO();

Cypress.Commands.add("getActionsWindow", () => {
    actions.getActionsWindow().scrollIntoView().invoke('removeAttr', 'target').click({ force: true }) 
})

Cypress.Commands.add("grabItem", () => {
    actions.getDraggable().trigger('mousedown', {which: 1});
})

Cypress.Commands.add("dragAndDropItem", () => {
    actions.getDroppable().trigger('mousemove').trigger('mouseup', {force:true})
})

Cypress.Commands.add("dblclickBox", () => {
    actions.getDblclickBox().dblclick()
})

Cypress.Commands.add("clickAndHoldBox", () => {
    actions.getClickBox().trigger('mousedown', {which: 1})
})

