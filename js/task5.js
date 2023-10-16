//5.1

function getAge(age){
    let currentDate = new Date().getFullYear();
    return `вам ${currentDate - age}`
}
let inputAge = parseInt(prompt("введите год рождения"));
console.log(getAge(inputAge));

//5.2

function filter(white, black){
    let mas = [];
    for(let i = 0; i < white.length; i++){
        let temp = white[i];

        if(!black.includes(temp)){
            mas.push(temp);
        }
    }

    return mas;
}
 
let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru'];
let blackList = ['jsfunc@mail.ru','goodday@day.ru'];
console.log(filter(whiteList,blackList));

//5.3

function arrSort(arr){

    for(let i=0; i < arr.length; i++)
    {
        for(let j = arr.length - 1; j > 0;  j--)
        {     
            if (arr[j] < arr[j-1])
            {
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }
    
    return arr;
}

console.log(arrSort([12,33,3,44,100]));