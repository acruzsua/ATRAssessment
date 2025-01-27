
class SpotifyQueryEndpoints {
    private spotifyQuery = `https://api.spotify.com/v1`;
    getArtists = (id:string) => `${this.spotifyQuery}/artists/${id}/top-tracks`

}

export class EndPoints {
    static SpotifyQuery = new SpotifyQueryEndpoints()
}



