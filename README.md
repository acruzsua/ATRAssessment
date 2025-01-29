# Spotify API Testing Guide

## 1. API Tests Using Cypress

### Steps:
1. **Clone the repo, navigate to cypress_api_fw folder and install necessary dependencies:**
   ```sh
   npm i
   ```

2. **Provide valid Spotify credentials to generate the access token:**
   - In the `tokenService.ts` file, replace the placeholders with your credentials:
     ```ts
     const clientId = 'REPLACE_WITH_CLIENT_ID';
     const clientSecret = 'REPLACE_WITH_CLIENT_SECRET';
     ```

3. **Run tests in the test runner:**
   ```sh
   npm run cy:open
   ```

4. **Run tests in headless mode:**
   ```sh
   npm run cy:run
   ```

## 2. API Tests Using Postman

### Steps:
1. **Import the collection:**
   - Use the file:
     ```
     ATRAssessment.postman_collection.json
     ```

2. **Set up authorization:**
   - From the **Authorization** tab, select `Auth Type: Bearer Token`.
   - Use the token generated in Cypress tests.

3. **Execute the request.**

## 3. Bonus Points

### 3.1 Performance Testing with k6
**k6** is an open-source performance testing tool designed for testing APIs and web applications. It is developer-centric and scriptable in JavaScript.

#### **Testing the Spotify API `/v1/artists/{id}/top-tracks` endpoint**
Performance testing this endpoint helps to:
- Ensure it handles multiple concurrent users efficiently.
- Evaluate response times under varying loads.
- Detect rate-limiting constraints.

### 3.2 Types of Tests

#### **1. Stress Test**
Stress testing assesses how the system performs under heavier-than-usual loads.

**Executor configuration:**
```js
scenarios: {
  executor: 'ramping-vus',
  startVUs: 0,
  stages: [
    { duration: '20s', target: 10 },
    { duration: '10m', target: 100 },
    { duration: '10s', target: 0 },
  ],
  gracefulRampDown: '0s',
}
```

#### **2. Endurance / Soak Test**
This test focuses on extended periods of execution, analyzing:
- The system’s availability and stability over long durations.

**Executor configuration:**
```js
scenarios: {
  executor: 'constant-arrival-rate',
  duration: '8h', // How long the test lasts
  rate: 10, // How many iterations per timeUnit
  timeUnit: '1s', // Start `rate` iterations per second
  preAllocatedVUs: 2, // Pre-allocate 2 VUs before starting the test
  maxVUs: 500, // Maximum of 500 VUs to sustain the defined rate
}
```

