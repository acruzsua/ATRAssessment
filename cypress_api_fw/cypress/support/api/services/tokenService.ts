const clientId = 'REPLACE_WITH_CLIENT_ID';
const clientSecret = 'REPLACE_WITH_CLIENT_SECRET';
const authHeader = 'Basic ' + btoa(clientId + ':' + clientSecret); // Encode in base64

export class TokenService {

    getToken = (): Cypress.Chainable<Cypress.Response<any>> => {

        const options = {
            failOnStatusCode: false,
            method: "POST",
            url: "https://accounts.spotify.com/api/token",
            headers: {
              'Authorization': authHeader,
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {
              grant_type: 'client_credentials'
            },
            form: true // Sends body as application/x-www-form-urlencoded
  
        };

        return cy.request({...options})

    }
}

export const tokenService = new TokenService()