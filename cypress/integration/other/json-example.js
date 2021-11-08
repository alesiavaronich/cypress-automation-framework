/// <reference types="Cypress" />

describe("JSON Object", () => {
    it("Json Object Examples", () => {
        const exampleObject = { "key1": "Tim", "key2": "Jones" }
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]
        const exampleArrayOfObjects = [{"key1": "Luke"}, {"key2": "Skywalker"}, {"key3": "22"}]

        const users = {
            "firstName": "Joe",
            "lastName": "Blogs",
            "Age": 30,
            "Students": [
                {
                    "fistName": "Jim",
                    "lastName": "Bloom"
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Parker"
                }
            ]
        }

        cy.log(exampleObject["key1"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleObject.key2);

        cy.log(exampleArrayOfValues[0]);
        cy.log(exampleArrayOfValues[1]);

        cy.log(users.Students[0].lastName);

        cy.log(exampleArrayOfObjects[0].key1);
        cy.log(exampleArrayOfObjects[1].key2);
        cy.log(exampleArrayOfObjects[2].key3);
    });

})