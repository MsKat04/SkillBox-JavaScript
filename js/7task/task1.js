function createStudentCard(name, age){
    let d = document.createElement('div')
    let h2 = document.createElement('h2')
    let a1 = document.createElement('spane')
    h2.textContent = name
    a1.textContent = age
    d.append(h2)
    d.append(a1)
    document.body.append(d);
}
const  ads = "Возраст: "
console.log(createStudentCard("Игорь", ads +"9"))