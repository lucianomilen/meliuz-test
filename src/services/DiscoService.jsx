export default class DiscoService {

    static token = "bsdjxoSNFkUnoAswJeOYiuGjgTMBXuhzNMLmnKjr"

    static async fetchArtistsList(query){
        return await fetch(`https://api.discogs.com/database/search?q=${query}&type=artist&per_page=3&token=${this.token}`)
            .then(response => {
                return response.json()
            });
    }

    static async fetchDiscoList(query){
        return await fetch(`https://api.discogs.com/database/search?q=${query}&type=release&per_page=5&token=${this.token}`)
            .then(response => response.json());
    }
}