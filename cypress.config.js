const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        },
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    viewportHeight: 1080,
    viewportWidth: 1920,
    requestTimeout: 7000,
});
