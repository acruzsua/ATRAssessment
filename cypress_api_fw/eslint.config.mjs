import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginPrettier from "eslint-plugin-prettier"

/**@type {import ('eslint').Linter.Config} */
export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginPrettier,
    {
        languageOptions: {
            globals: 
            {
                ...globals.browser,
                ...globals.node, 
                ...globals.es2020, 
                ...globals.commonjs, 
                ...globals.chai
            }   
        }
    },
    {
        files: ["**/*.{js, mjs, cjs,ts}"],
        rules: {
            "@typescript-eslint/no-explicit-any": ["warn"], 
            "@typescript-eslint/no-namespace": [
                "error",{allowDeclarations: true}
            ]
        }
    },
    {
        files: ["scripts/cypress_runner.js"],
        rules: {
            "@typescript-eslint/no-require-imports": ["off"]
        }
    }
]