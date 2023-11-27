const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },
  env: {

    login_url: '/login',
    products_url: '/products',
  },

});
