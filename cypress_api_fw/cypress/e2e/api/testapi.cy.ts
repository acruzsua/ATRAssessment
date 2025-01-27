import { assertResponse } from "../../support/api/utils/utils";
import { HttpStatus } from "../../support/api/constants/commonValues";
import { spotifyService } from "../../support/api/services/spotifyService";


describe( "API tests | Spotify API", ()=>{

    
    it("GET /artists/{id}/top-tracks | 200", () =>{
        sessionStorage.setItem("accessToken", "")

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
        sessionStorage.setItem("accessToken", "")
        spotifyService.getArtists("0TnOYISbd1XYRBk9myasek").then((response)=>{
            expect(response.status).to.eq(HttpStatus.NotFound, `Status is ${HttpStatus.NotFound}`);

        })

    });

    


})
