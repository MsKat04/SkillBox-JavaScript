//1.1
console.log('hello word');

//2.1
let x1 = parseInt(prompt("input x1")); 
let x2 = parseInt(prompt("input x2")); 
let y1 = parseInt(prompt("input y1")); 
let y2 = parseInt(prompt("input y2")); 
let S = Math.abs(x2-x1) * Math.abs(y2-y1);
console.log(S);



//2.2
let a = parseFloat(prompt("a"));
let b = parseFloat(prompt("b"));
let n = parseInt(prompt("n"));
let firstNum = Math.round(a%1 * Math.pow(10,n));
let secondNum = Math.round(b%1 * Math.pow(10,n));
console.log(firstNum, secondNum);
console.log(firstNum > secondNum);
console.log(firstNum < secondNum);
console.log(firstNum >= secondNum);
console.log(firstNum >= secondNum);
console.log(firstNum === secondNum);
console.log(firstNum !== secondNum);


//2.3
let num = parseInt(prompt("n"));
let m = parseInt(prompt("m"));

let min = Math.min(num,m);
let max = Math.max(num,m);

let firstNumRand = Math.round(Math.random() * (max - min) + 1);
console.log(firstNumRand + min)

let secondNumRand = Math.round(Math.random() *(max - min) + 1);
console.log( secondNumRand + min);