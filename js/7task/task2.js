function createStudentCard(student){
    let d = document.createElement('div')
    let h2 = document.createElement('h2')
    let a1 = document.createElement('spane')
    h2.textContent = student.name
    a1.textContent = student.age
    d.append(h2, a1)
    document.body.append(d);
}
const  ad = "Возраст: "
let student={
    name: 'Игорь',
    age: ad + 17
}
console.log(createStudentCard(student))