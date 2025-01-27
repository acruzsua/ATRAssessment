import { EndPoints } from "../endpoints"
import { getAccessToken } from "../utils/utils";

export class SpotifyService {

    getArtists = (id: string): Cypress.Chainable<Cypress.Response<any>> => {

        const options = {
            failOnStatusCode: false,
            method: "GET",
            url: `${EndPoints.SpotifyQuery.getArtists(id)}`,
            headers: {
                'Authorization': `Bearer ${getAccessToken()}`
              },
        };

        return cy.request({...options})

    }
}

export const spotifyService = new SpotifyService()