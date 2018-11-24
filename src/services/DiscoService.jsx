export default class DiscoService {

    static token = "bsdjxoSNFkUnoAswJeOYiuGjgTMBXuhzNMLmnKjr"

    static async fetchDiscoList(query){
        return await fetch(`https://api.discogs.com/database/search?q=${query}&type=release&per_page=5&token=${this.token}`)
            .then(response => response.json());
    }
}