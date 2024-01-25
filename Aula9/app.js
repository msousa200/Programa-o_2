console.log("1");

window.onload = () => {
    console.log("document loaded, application started");
}

console.log("2");

const soma = (a,b) => {
    
    return a + b;
}

const result = soma(1,2);
console.log(result);


const multiplicacao = (c,d) => {
    
    return c * d;
}

const result1 = multiplicacao(1,2);
console.log(result1);

const result2 = multiplicacao(result,2);
console.log(result2);

//onsole.log(multiplicacao(soma(1,2), 2));

const arr = [2,45,34,2];


const calcAverage =(nums) =>{
    
     let value = 0;
     nums.forEach(num => {
        value += num;
     });
     return value/nums.length;
}

const result4 = calcAverage(arr);
console.log(result4);

const array = [1,2,3,4,5,6];

array.forEach(num => {
    console.log(num);
});




