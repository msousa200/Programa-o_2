import ArtPiece from "./ArtPiece.js";

export default class Photo extends ArtPiece {
    #blackandwhite;
    #colors;

    constructor(data, callback) {
        super(data, callback);
        
        if (data.blackandwhite) {
            this.#blackandwhite = data.blackandwhite;
        } else {
            this.#colors = data.colors;
        }
    }
}
