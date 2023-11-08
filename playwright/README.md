# Playwright test suite for the Blazemeter.com shop

This repo contains some basic Playwright UI tests for the www.demoblaze.com mock e-commerce website.
Test coverage currently includes (note this is a WIP):

- assert the homepage has loaded
- verify objects displayed on page, navigation etc.
- uses an authenticated state class to apply a logged in state to relevant test classes
- adds items to basket, completes purchase while logged in (WIP)
