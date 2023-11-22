const { defineConfig } = require("cypress");
const { beforeRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Mi Reporte',
    reportTitle: 'Reporte de mis pruebas',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  video:true,
  screenshotOnRunFailure:true,
  retries:{
    runMode: 1,
    openMode: 2
  } ,
  e2e: {
    baseUrl:'http://teststore.automationtesting.co.uk/',
    experimentalInteractiveRunEvents: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      on('before:run', async (details) => {
        await beforeRunHook(details);

        console.log('1 Mi plugin: Running')
        if(details.specs && details.browser){
          console.log('Browser: ', details.browser.name)
        }
      })
    },
  },
});