class Radiobuttons_PO {

    getRadiobuttonsWindow() {
        return cy.get('#dropdown-checkboxes-radiobuttons')
    }

    getRadiobuttonsBox() {
        return cy.get('#radio-buttons').find("[type='radio']")
    }
    
    getValueLettuce() {
        return cy.get("[value='lettuce']")
    }

    getValuePumpkin() {
        return cy.get("[value='pumpkin']")
    }

    getValueCabbage() {
        return cy.get("[value='cabbage']")
    }

    
    
}

export default Radiobuttons_PO;