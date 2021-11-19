/// <reference types="Cypress" />

describe("Test file upload via webdriveruni", () => {
    it("Upload a file", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })
        
        // By default JSON files are stored in 'fixtures' folder and then used for further manipulations
        // Therefore, for JSON files we would not need to provide the same level of details
        // Other file formats require additional details in order to upload correctly

        // cy.fixture() points to the .png file in our local 'fixtures' folder
        // Then we use 'then' command to locate and access our destination for further file upload
        // Next we use .attachFile() command to specify all necessary file specs, which allow cypress to read and upload file correctly
        
        
        cy.fixture("laptop.png", "base64").then(fileContent => {
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: "laptop.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            )
        })
        cy.get("#submit-button").click();
    });

    it("Upload no file", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })
        cy.get("#submit-button").click();
    });
});