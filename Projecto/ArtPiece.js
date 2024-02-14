export default class ArtPiece {
    #callback;
    #imageElem;
    #data;
    

    constructor(data, callback) {
        this.#data = data;
        this.#callback = callback;
        this.#buildArtPieceElement();
        
    }

    #buildArtPieceElement() {
        const div = document.createElement("div");
        div.className = "artpiece-container";

        this.#imageElem = document.createElement("img");
        this.#imageElem.src = this.#data.image;

        const container = document.querySelector("#images-container");
        if (container) {
            div.appendChild(this.#imageElem);
            container.appendChild(div);
        } else {
            console.error("Container '#images-container' not found.");
        }
    }

    introduce() {
        return "This " + this.#data.type + " with the title '" + this.#data.title + "' is made of " + this.#data.medium + " by the artist " + this.#data.artist + ".";
    }
    
    get type() {
        return this.#data.type;
    }
    get title() {
        return this.#data.title;
    }
    get medium() {
        return this.#data.medium;
    }
    get artist() {
        return this.#data.artist;
    }
}

