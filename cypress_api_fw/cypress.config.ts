import {defineConfig} from "cypress";
import setupNodeEvents from "./cypress/plugins";

export default defineConfig({

  env: {
    TAGS: "",
    CYPRESS_INCLUDE_USE_BOOLEAND_AND: true,
    CYPRESS_INCLUDE_TAGS: ""
  },

  numTestsKeptInMemory: 5,
  reporter: "mochawesome",
  reporterOptions: {overwrite: false},
  e2e: {setupNodeEvents,
    specPattern: ["cypress/e2e/**/*.feature", "cypress/e2e/**/*/*.cy.ts"],
    supportFile: "cypress/support/e2e.ts",
    chromeWebSecurity:false,

    defaultCommandTimeout: 25000,
    retries: {runMode: 0,
      openMode: 0
    },
    testIsolation: true,
    video:true,
    viewportWidth: 1600,
    viewportHeight: 1000,
    watchForFileChanges: false
  }
})

