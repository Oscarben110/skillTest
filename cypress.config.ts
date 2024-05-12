import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  videoCompression: 32,
  reporter: 'cypress-mochawesome-reporter',
  "reporterOptions": {
    "html": false,
    "saveJson": true,
    "charts": true,
    "reportDir": "cypress/report/mocha",
    "reportTitle": "Sales page report",
    "reportFilename": "report",
    "reportPageTitle": "Sales Page",
    "overwrite": true
  },
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    testIsolation: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
