import ArtPiece from "./ArtPiece.js";

export default class Painting extends ArtPiece {

    #oiloncanvas;
    constructor(data, callback) {
        super(data, callback);

        this.#oiloncanvas = data.oiloncanvas;
    }
    

    
}