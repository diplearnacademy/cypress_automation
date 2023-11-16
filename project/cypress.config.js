const { defineConfig } = require("cypress");


module.exports = defineConfig({
  video:true,
  screenshotOnRunFailure:true,
  e2e: {
    baseUrl:'http://teststore.automationtesting.co.uk/',
    experimentalInteractiveRunEvents: true,
    setupNodeEvents(on, config) {
      on('before:run', (details) => {
        console.log('1 Mi plugin: Running')
        if(details.specs && details.browser){
          console.log('Browser: ', details.browser.name)
        }
      })
    },
  },
});