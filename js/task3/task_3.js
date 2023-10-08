//3.1
let password = prompt("Введите пароль");

let passwordTest = password.includes('-');
let passwordTest2 = password.includes('_');
console.log(passwordTest);

if (password.length > 3){
    if (passwordTest || passwordTest2){
        console.log("Пароль надёжный");
    }
    else{
        console.log('Пароль недостаточно надёжный');
    }
}
else {
    console.log('Пароль недостаточно надёжный');
}



//3.2
let userName = prompt("введите имя");
let userSurname = prompt("введите фамилию");

let firstLetterSurname = userSurname.substring(0,1);
let othersLettersSurname = userSurname.substring(1);


let firstLetterName = userName.substring(1);
let othersLettersName = userName.substring(0,1);

let nameTest = (othersLettersName === othersLettersName.toUpperCase() 
                        && firstLetterName === firstLetterName.toLowerCase()) ? true : false;

let surnameTest = (firstLetterSurname === firstLetterSurname.toUpperCase() 
                        && othersLettersSurname === othersLettersSurname.toLowerCase()) ? true : false;


let convertedName = nameTest ? console.log("Имя осталoсь без изменений") 
                    : console.log("Имя было преобразовано", 
                        othersLettersName.toUpperCase() + firstLetterName.toLowerCase());

let convertedSurname = surnameTest ? console.log("фамилия осталaсь без изменений") 
                    : console.log("фамилия былa преобразованa", 
                        firstLetterSurname.toUpperCase() + othersLettersSurname.toLowerCase());


//3.3
let number = parseInt(prompt("Введите число"));
console.log(number%2==0 ? console.log('Число чётное'): console.log('Число нечётное'));