import ArtPiece from "./ArtPiece.js";

export default class Sculpture extends ArtPiece {
    #marble;
    #bronze;

    constructor(data, callback) {
        super(data, callback);
        this.#marble = data.marble;
        this.#bronze = data.bronze;
    }
}
