import { assertResponse } from "../../support/api/utils/utils";
import { HttpStatus } from "../../support/api/constants/commonValues";
import { spotifyService } from "../../support/api/services/spotifyService";
import { tokenService } from "../../support/api/services/tokenService";



describe( "API tests | Spotify API", ()=>{
    beforeEach(() => {
        tokenService.getToken().then((response)=>{
            sessionStorage.setItem("accessToken", response.body.access_token)
        })
    })
    
    it("GET /artists/{id}/top-tracks | 200", () =>{
        const valuesToCheck = {
            album: {name:"Planet Pit (Deluxe Version)", totalTracks: 16},
            id: "4QNpBfC0zvjKqPJcyqBy9W",
            name: "Give Me Everything (feat. Nayer)",
            popularity: 84,
            trackNumber: 2
        }

        spotifyService.getArtists("0TnOYISbd1XYRBk9myaseg").then((response)=>{
            expect(response.status).to.eq(HttpStatus.Ok, `Status is ${HttpStatus.Ok}`);
            cy.wrap(response).as("topTracksResponse");
            assertResponse(valuesToCheck);
        })

    });

    it("GET /artists/{id}/top-tracks | 401", () =>{
        sessionStorage.setItem("accessToken", "invalidToken");
        spotifyService.getArtists("0TnOYISbd1XYRBk9myaseg").then((response)=>{
            expect(response.status).to.eq(HttpStatus.UnAuthorised, `Status is ${HttpStatus.UnAuthorised}`);

        })

    });

    
    it("GET /artists/{id}/top-tracks | 404", () =>{
        spotifyService.getArtists("0TnOYISbd1XYRBk9myasek").then((response)=>{
            expect(response.status).to.eq(HttpStatus.NotFound, `Status is ${HttpStatus.NotFound}`);

        })

    });

    


})
