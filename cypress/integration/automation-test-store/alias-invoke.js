/// <reference types="Cypress" />

describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        // We locate all of the headers within a given category; we then isolate the 1st header (eq(0))
        // We then invoke to extract the text of that 1st header
        // We then us an alias command with the productThumbnail
        // An alias works like a variable, which enables us to use the previously described logic again 
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail');
        // We create an assertion using the alias - the length of the header is greater than 5 characters
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        // Does our header contain the correct text? Let's assert.
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });

    it("Validate product thumbnail", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail')
        // How many product thumbnails do we have on the page?
        cy.get('@productThumbnail').should('have.length', 16)
        // How many product carts do we have? Let's find all the product cart icons in the thumbnails and then
        // let's invoke an attribute with the html tag of 'title' in each one of them
        // then lets assert that the value of the attribute is 'Add to Cart'
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });

    it.only("Calculate total of normal and sale products", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
            cy.log($el.text());

        });

    });

    it.only("Calculate total of normal and sale products", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@itemPrice').then($linkText => {
            var itemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
            }
        })
    });

});
