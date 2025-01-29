# Spotify API Testing Guide


## 1. API Tests Using Cypress

### Steps:
1. Install Cypress:
   ```sh
   npm i
   ```
2. Provide valid Spotify credentials to generate the access token. In tokenService.ts file replace const clientId = 'REPLACE_WITH_CLIENT_ID' and const clientSecret = 'REPLACE_WITH_CLIENT_SECRET'
3. Run tests in the test runner:
   ```sh
   npm run cy:open
   ```
4. Run tests in headless mode:
   ```sh
   npm run cy:run
   ```

## 3. API Tests Using Postman

### Steps:
1. Import the collection:
   ```
   ATRAssessment.postman_collection.json
   ```
2. From the Authorization tab, select `Auth Type: Bearer Token` and use the token generated in Cypress tests.
3. Execute the request.
