function createStudentList(allStudent){
    let d = document.createElement('ul')
    document.body.append(d)

    for(let i = 0; i < allStudent.length; i++){
        let h2 = document.createElement('h2')
        h2.textContent = allStudent[i].name

        let a1 = document.createElement('spane')
        a1.textContent = allStudent[i].age

        let li = document.createElement('li')
        li.append(h2, a1);
        d.appendChild(li);
    }
    document.body.appendChild(d)
}

let allStudents=[
    {name: 'Валя', age: 11},
    {name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
];

console.log(createStudentList(allStudents))