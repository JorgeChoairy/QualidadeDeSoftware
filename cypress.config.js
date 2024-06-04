const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  plugins: [cucumber()],

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
