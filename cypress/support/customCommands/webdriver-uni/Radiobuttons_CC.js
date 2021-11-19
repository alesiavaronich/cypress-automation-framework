import Radiobuttons_PO from '../../pageObjects/webdriver-uni/Radiobuttons_PO';
const radiobuttons = new Radiobuttons_PO();

Cypress.Commands.add("getRadiobuttonsWindow", () => {
    radiobuttons.getRadiobuttonsWindow().scrollIntoView().invoke('removeAttr', 'target').click({ force: true }) 
    
})