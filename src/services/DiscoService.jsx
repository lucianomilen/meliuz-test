export default class DiscoService {

    static token = "bsdjxoSNFkUnoAswJeOYiuGjgTMBXuhzNMLmnKjr"

    static apiURL = "https://api.discogs.com"

    static async fetchArtistsList(query){
        return await fetch(`${this.apiURL}/database/search?q=${query}&type=artist&per_page=3&token=${this.token}`)
            .then(response => {
                return response.json()
            });
    }

    static async fetchDiscoList(query, page){
        if(!page)
            page = 1
        return await fetch(`${this.apiURL}/artists/${query}/releases?sort=year&page=${page}&per_page=5&token=${this.token}`)
            .then(response => response.json());
    }

    static async fetchDiscoDetail(query){
        return await fetch(`${this.apiURL}/releases/${query}?token=${this.token}`)
            .then(response => response.json());
    }
}