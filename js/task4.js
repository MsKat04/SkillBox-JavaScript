//4.1

let countNum = parseInt( prompt());
let masArr = [];

let num = parseInt(prompt("n"));
let m = parseInt(prompt("m"));

let min = Math.min(num,m);
let max = Math.max(num,m);


for(let i = 0; i < countNum; i++)
{
    let firstNumRand = Math.round(Math.random() * (max - min) + 1);
    masArr.push(firstNumRand + min);
}
console.log(masArr);

//4.2

let count = parseInt(prompt('k'));
let mas = [];

for(let i = 1; i <= count; i++)
{
    mas.push(i);
}
console.log(mas);

for (let i = mas.length - 1; i > 0; i--) 
{
    let j = Math.floor(Math.random() * (i + 1));
    let temp = mas[i];
    mas[i] = mas[j];
    mas[j] = temp;
}
console.log(mas);

//4.3
let n = parseInt(prompt('n'));
let f = -1;
for(let i = 0; i < mas.length; i++)
{
    if( n === mas[i])
    {
        f=i;
        break
    }
}
console.log(f !== -1 ? "индекс элемента = " + f : "элемент не найден");

//4.3
arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
arr2 = [12, 44, 23, 5];

for (let i = 0; i < arr2.length; i++) 
{
    arr1.push(arr2[i]);
}

console.log(arr1);
