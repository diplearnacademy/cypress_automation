const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl:'http://teststore.automationtesting.co.uk/',
    setupNodeEvents(on, config) {

    
    },
  },
});