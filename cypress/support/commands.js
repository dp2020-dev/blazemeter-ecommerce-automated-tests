// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
})

Cypress.Commands.add('completePurchaseDetails', (customerName) => {

    cy.fixture('userDetails').then(function (userDetails) {
        this.userDetails = userDetails

        // Doing the search part for Shirts.
        cy.get('#name').type(this.userDetails.name);
        cy.get('#country').type(this.userDetails.country);
        cy.get('#city').type(this.userDetails.city);
        cy.get('#card').type(this.userDetails.creditCard);
        cy.get('#month').type(this.userDetails.month);
        cy.get('#year').type(this.userDetails.year)
    })
})



Cypress.Commands.add('clearCart', () => {

    function deleteElements(cartUrl) {
        cy.visit(cartUrl)
        cy.contains('Delete').then(($deleteButtons) => {
            if ($deleteButtons.length > 0) {
                cy.wrap($deleteButtons.first()).click();
                deleteElements(); // Recursively call the function until there are no more 'Delete' elements
            }
        });
    }

    deleteElements();
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })