window.onload = () => {
    /*const nav = document.querySelector("nav");
    const h1 = document.createElement("h1");

    h1.innerText = "Hello";

    nav.appendChild(h1);

    const button = document.querySelector("button");
    button.onclick = () =>{
        console.log("button clicked");
    };

    button.onmousedown = () => {
        console.log("mouse down");
    }
    button.onmouseup = () => {
        console.log("mouse up");
    }
    button.onmouseenter =() =>{
        console.log("mouse enter");

    }
    button.onmouseout = () =>{
        console.log("mouse out");

    }*/


    const test = new AppTest();
    test.addEventListener ('test_data_loaded', (event) =>)
    const small = document.querySelector(".small");


    large.onclick = () => {

        small.dispatchEvent(new CustomEvent('small_event'));

    }

    small.addEventListener("small_event", () => {
        console.log("large clicked");
        
    });
}

class Test {
    constructor(){

    }
    async onDataLoad(){
        this.dispatchEvent/Custom
    }
}
    
    
    
    
    
    
    /*let intervalID = null;
    large.onclick = () => {
        if(intervalID === null) {
            intervalID = setInterval(() => {
                console.log("interval");
            }, 1000);
        }else{
            console.log("stop interval", intervalID);
            clearInterval(intervalID);
            intervalID = null;
        }
        }
    }
    

    // Para a nav desaparecer//  ->  nav.removeChild(h1);

    //console.log(nav);


