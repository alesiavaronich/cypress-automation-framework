/// <reference types="Cypress" />

// The following tests contain examples containing the elements of mixed libraries: JQuery, Chai, Mocha, Cypress

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/");

        // We have created a dynamic selector and then asked cypress to look for specific text in it
        // The following approach will fail due to cypress asynchronous nature, we've used some non-native
        // elements (constants) to access the elements and interacti with them

        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // makeupLink.click();
        // skincareLink.click();

        // The following will pass, however it is still not recommended. Wrapping cy.get into variables produces inconsistent flaky results.

        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")   
        // skincareLink.click();

        // Recommended approach

        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
    });

    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        // This approach is flaky, test might fail.
        //const header = cy.get("h1 .maintext");
        //cy.log(header);
        //cy.log(header.text());

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq('Makeup')
        })
    });

    it.only("Validate properties of the Contact Us Page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");

        //Uses cypress commands and chaining to locate an element and to validate whether it contains the correct text
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:')

        //JQuery Approach (also uses .then promise, a variable, JQuery method.text(), Chai's 'expect' assertion)
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')


            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
            })
        })
    });
});