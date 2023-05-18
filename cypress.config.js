const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'epvsgr',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
