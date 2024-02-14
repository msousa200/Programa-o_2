import Sculpture from "./Sculpture.js";
import Painting from "./Painting.js";
import Photo from "./Photo.js";

export default class Gallery {

    #artpieces;
    #callback;
    #currentArtpiece = null;
    constructor(callback) {
        this.#artpieces = [];
        this.#callback = callback;
    }

    addArtPiece(artpiece) {
        let nextArtpiece = null;
        switch (artpiece.type) {
            case "painting":
                nextArtpiece = new Painting(artpiece, () => this.#performArtpiece(nextArtpiece));
                break;
            case "photo":
                nextArtpiece = new Photo(artpiece, () => this.#performArtpiece(nextArtpiece));
                break;
            case "sculpture":
                nextArtpiece = new Sculpture(artpiece, () => this.#performArtpiece(nextArtpiece));
                break;
        }
        this.#artpieces.push(nextArtpiece);
    }

    #performArtpiece(artpiece) {
        if(this.#currentArtpiece) {
            this.#currentArtpiece.active = false;
        }

        this.#currentArtpiece = this.#artpieces.find(art => art.title === artpiece.title);
        this.#currentArtpiece.active = true;
        
        this.#callback(artpiece);
    }

    showArtpieces() {
        this.#artpieces.forEach(artpiece => {
            console.log(artpiece.introduce());
        });
    }

    getArtpiece(index) {
        return this.#artpieces[index];
    }
}
