import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import {createEsbuildPlugin} from "@badeball/cypress-cucumber-preprocessor/esbuild"
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { nodeModulesPolyfillPlugin } from "esbuild-plugins-node-modules-polyfill";
import { tagify } from "cypress-tags";

export default async (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
await addCucumberPreprocessorPlugin(on, config);
const esBundler = createBundler({plugins: [nodeModulesPolyfillPlugin(), createEsbuildPlugin(config)]})

const tagifyBundler = tagify(config);

on ("file:preprocessor", (file) => file.filePath.includes(".feature") ? esBundler(file): tagifyBundler(file));


return config
}