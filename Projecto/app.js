import Gallery from "./Gallery.js";

window.onload = async () => {
    const request = await fetch("data.json");
    const result = await request.json();

    const myGallery = new Gallery((artpiece) => {
        document.querySelector("#infoButton").onclick = () =>{
            const h2 = document.querySelector("h2")
            h2.innerText = artpiece.introduce();
            
        }
    });

    result.forEach(item => {
        myGallery.addArtPiece(item);
    });

    let currentIndex = 0;
    const images = document.querySelectorAll(".artpiece-container img");
    const nextButton = document.getElementById("nextButton");
    const infoButton = document.getElementById("infoButton");
    const backButton = document.getElementById("backButton");
    const titleElement = document.querySelector("h2");

    const showFirstImage = () => {
        showImage(0);
    };

    const showImage = (index) => {
        images.forEach((image, i) => {
            image.style.display = i === index ? "block" : "none";
        });
        currentIndex = index;
    };

    const showNextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
        titleElement.innerText = "";
    };

    const showBackImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
        titleElement.innerText = "";
    };
    
    const showInfoImage = () => {
    const currentArtPiece = myGallery.getArtpiece(currentIndex);
    console.log(currentArtPiece)
    if (currentArtPiece) {
        document.querySelector("h2").innerText = currentArtPiece.introduce();
    } else {
        console.error("Art piece not found.");
    }
    };


    showFirstImage();

    nextButton.onclick = () => {
        showNextImage();
    };

    infoButton.onclick = () => {
        showInfoImage();
    };

    backButton.onclick = () => {
        showBackImage();
    }

};

