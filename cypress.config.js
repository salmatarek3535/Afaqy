const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const {exec} = require("child_process");


module.exports = defineConfig({

  defaultCommandTimeout: 40000,
  watchForFileChanges: false,
  pageLoadTimeout: 50000,

  env: {
    allureResultsPath: "allure-results"
  },
  e2e: {
    baseUrl: 'https://automationexercise.com/',

    setupNodeEvents(on, config) {

      on('file:preprocessor', cucumber());

      on("after:run", () => {
        exec("npm run generate-allure-report");
      });
      return config;
    },

    specPattern: "cypress/e2e/features/*.feature",
  },
});
