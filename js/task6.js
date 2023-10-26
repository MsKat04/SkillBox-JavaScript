//6.1

function getOlderUser(user1, user2){

    return (user1.age > user2.age ? old = user1.name:old = user2.name)
}

let user1={
    name: 'Игорь',
    age: 17
}

let user2={
    name: 'Оля',
    age: 21
}

let result = getOlderUser(user1, user2);
console.log(result);


//6.2

function getOlderUser(allUser){
    let olderUser = allUser[0]
    for(let i =0; i < allUser.length; i++){
        if(allUser[i].age > olderUser.age){
            olderUser = allUser[i];
        }
    }
    return olderUser.name;
}

let allUsers=[
    {name: 'Валя', age: 11},
    {name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
];

console.log(getOlderUser(allUsers));


//6.3

function filter(arr, prop, value) {
    let r = [];
    for(let i=0; i<arr.length; i++){
        if (arr[i][prop]===value){
            r.push(arr[i]);
        }
    }
    return r;
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
   ]
    let res = filter(objects, 'surname', 'Петров');

    console.log(res)
