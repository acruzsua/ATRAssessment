export const getAccessToken = (): string | null => {
    return sessionStorage.getItem("accessToken")
}

export const assertResponse = (valuesToCheck: any) => {
    cy.get("@topTracksResponse").then((r:any)=>{
       
        const track = r.body.tracks.find(
            (t:any) =>
                t.album.name === valuesToCheck.album.name &&
                t.album.total_tracks === valuesToCheck.album.totalTracks &&
                t.id === valuesToCheck.id &&
                t.name === valuesToCheck.name &&
                t.popularity === valuesToCheck.popularity &&
                t.track_number === valuesToCheck.trackNumber
        );
      
        // Assert that the track exists
        expect(track).to.not.be.undefined;

    })
}