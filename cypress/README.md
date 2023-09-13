#Blazemeter (demo) shop functional automated tests using Cypress#

This repo contains some basic Cypress automated functional tests for the www.demoblaze.com test website.

It applies basic tests using Cypress commands such as `cy.visit()`, `cy.get()`, and `cy.contains()` to assert the homepage has loaded (Homepage.cy.js), and uses a base url in cypress.config.

The E2EloginPurchases.spec covers customer log in, selecting items and adding to cart, fill in purchase details and completes purchase. This flow includes using the Fixtures file for user details, and custom commands to abstract clicking links and completing payment details.