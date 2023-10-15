//3.1
/*
let password = prompt("Введите пароль");

let passwordTest = password.includes('-');
let passwordTest2 = password.includes('_');
console.log(passwordTest);

if (password.length > 3 && passwordTest || passwordTest2)
{
    console.log("Пароль надёжный");
}
else
{
    console.log('Пароль недостаточно надёжный');
}
*/

/*
//3.2
let userName = prompt("введите имя");
let userSurname = prompt("введите фамилию");

let firstLetterSurname = userSurname[0];
let othersLettersSurname = userSurname.substring(1);


let othersLetterName = userName.substring(1);
let firstLettersName = userName[0];

let nameTest = (firstLettersName === firstLettersName.toUpperCase() 
                        && othersLetterName === othersLetterName.toLowerCase());

let surnameTest = (firstLetterSurname === firstLetterSurname.toUpperCase() 
                        && othersLettersSurname === othersLettersSurname.toLowerCase());


let convertedName = nameTest ? console.log("Имя осталoсь без изменений") 
                    : console.log("Имя было преобразовано", 
                        firstLettersName.toUpperCase() + othersLetterName.toLowerCase());

let convertedSurname = surnameTest ? console.log("фамилия осталaсь без изменений") 
                    : console.log("фамилия былa преобразованa", 
                        firstLetterSurname.toUpperCase() + othersLettersSurname.toLowerCase());

*/
/*
//3.3
let number = parseInt(prompt("Введите число"));
console.log(number%2===0 ? console.log('Число чётное'): console.log('Число нечётное'));
*/