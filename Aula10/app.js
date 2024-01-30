window.onload = ()=>{

    /*const test = new Test(()=> {
        console.log("app test clicked");
    });
    test.width = 100;
    test.height = 150;
    test.background = "red";

    const h1 = document.querySelector("h1");*/
    
    const test = new Test((data) =>{
        h1.innerText = value;

    });

    test.width = 100;
    test.height = 150;
    test.background = "red";
    const h1 = document.querySelector("h1");
    
    


    console.log(test.width);
    console.log(test.height);
    console.log(test.background);

    const test2 = new Test(()=> {
        console.log("app test2 clicked");
    });
    test2.width = 200;
    test2.height = 200;
    test2.background = "blue";
    console.log(test2.width);
    console.log(test2.height);
    console.log(test2.background);

    const test3 = new Test(()=> {
        console.log("app test3 clicked");
    });;
    test3.width = 300;
    test3.height = 300;
    test3.background = "green";
    console.log(test3.width);
    console.log(test3.height);
    console.log(test3.background);

}

    class Test{

        #name = "miguel";
        #age = 23;
        #gender = "male";

        #view;
        #callback;

        constructor(name, callback){

            this.#name = callback;

            this.#view = document.createElement("div");
            this.#view.className = "view";
            this.#view.onclick = () =>{
                this.#callback();
            }
            document.body.appendChild(this.#view);

        }

        setSize(width, height) {
            this.#view.style.width = width + "px";
            this.#view.style.height = height + "px";
        }

        get width(){
            return this.#view.style.width.replace("px", "");
        }
        set width(value){
            this.#view.style.height = value + "px";
        }

        get height(){
            return this.#view.style.height.replace("px","");
        }

        getName(){

            return this.#name;
        }

        getAge(){

            return this.#age;
        }

        getGender(){
            return this.#gender;
        }
        

        setName(value) {
            this.#name = value;
        }

        setAge(value){
            this.#age = value;
        }

        setGender(value){
            this.#gender = value;
        }

    }
        
    

    const test = new Test();



    const test2 = new Test();

    test2.width = 200;
    test2.height = 200;
    test2.background = "blue";

    console.log(test2.width);
    console.log(test2.height);
    console.log(test2.background);

    const test3 = new Test();

    test3.width = 300;
    test3.height = 300;
    test3.background = "green";

    console.log(test3.width);
    console.log(test3.height);
    console.log(test3.background);



    
    
    class Test2{

        #view;
        construtor(callback){
            this.#view = document.createElement("div");
            this.#view.onclick =() => callback();

            document.body.appendChild(this.#view);
            }

        set width(value){
            this.#view.style.width = value + "px";
        }

        set height(value){
            this.#view.style.height = value + "px";
        }

        set background(value){
            this.#view.style.background = value + "px";
        }

        }
    
    

  


