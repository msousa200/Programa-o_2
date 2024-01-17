

let c ="praia"

if(c == "praia") {
    console.log("é praia");
} else{
    console.log("não é praia");
}


let a = 10;
let b = "100";

if(a=="10" && b == "100"){
    console.log(true);
} else{
    console.log(false);
}

if(a=="10" || b == "100"){
    console.log(true);
} else{
    console.log(false);
}

if(a== "10") {
    console.log(true);
} else if(a==="30"){
    console.log(false);
}else{
    console.log("jeh cwjech ewcjh");
}
/*
switch(a) {
    case 10:
        console.log(true);
        break;
    case "10":
        console.log(true);
        break;
    case "20":
        console.log(false);
        break;
    case "40":
        console.log(false);
        break;
        default:
            console.log(true);

} */

 a == "10" ? console.log(true) : console.log(false);

 let d = 0;

 while(d < 20){
    console.log(d);

    d = d + 1;
    //d += 1
    //d++
 }

 //let arr = ["praia", "cidade", "campo", "floresta","montanha", 10, 100];

 //for(let i = 0; i < arr.length; i++){
    //console.log(arr[i]);
 //}

 //ao contrario

 //for(let i = arr.length-1; i >= 0; i--){
  //  console.log(arr[i])
 //}

 //const PI = 3.14;
 let arr = [20,30,40,15,100];
 /*arr[0] = arr[0] * PI;
 arr[1] = arr[1] * PI;
 arr[2] = arr[2] * PI;

 console.log(arr[2]) */

arr.forEach(element => {
    console.log(element);
});

let obj = {
    name: "miguel",
    age: "23",
    gender: "male",
}

console.log(obj["name"])

for (const key in obj) {
     //if (Object.hasOwnProperty.call(object, key)) {
     //   const element = object[key];
        
    //}

    console.log(obj[key]);
}




