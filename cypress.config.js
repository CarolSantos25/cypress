const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 10000,
  chromeWebSecurity: false,
  viewportHeight: 880,
  viewportWidth: 1280,
  env: {
    comum: "standard_user",
    bloqueado: "locked_out_user",
    pro: "problem_user",
    falha: "performance_glitch_user",
    senha: "secret_sauce"
  },
  e2e: { 
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
