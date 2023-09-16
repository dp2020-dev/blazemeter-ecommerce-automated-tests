# Playwright test suite for the Blazemeter shop

This repo contains some basic Playwright (UI) tests for the www.demoblaze.com test website. 

It applies basic tests using Playwright to assert the homepage has loaded, objects displayed on age, navigation etc.

The E2EloginPurchases.spec covers customer log in, selecting items and adding to cart, fill in purchase details and completes purchase. This flow includes using the Fixtures file for user details, and custom commands to abstract clicking links and completing payment details.
