//LOCAL STORAGE
localStorage.setItem('name', 'Raí vaz de oliveira')
const name = localStorage.getItem('name')

console.log(name)

const lastName = localStorage.getItem('lastName')
console.log(lastName)

localStorage.removeItem('name')

localStorage.setItem('a', 1)
localStorage.setItem('b', 2)
console.log(typeof localStorage.getItem('a'))

localStorage.clear()

//SESSION STORAGE
sessionStorage.setItem('A', 123)
console.log(sessionStorage.getItem('A'))

const person = {
    name: "Raí vaz",
    age: 24,
    isAdmin: true,
    address: {
        street: "Alameda Santos",
        number: 245
    }
}

sessionStorage.setItem('person', JSON.stringify(person) )

const getPerson = sessionStorage.getItem('person')
const personObj = JSON.parse(getPerson)
console.log(personObj.address.number)

//EXERCÍCIO PRÁTICO
const form = document.querySelector("#form")
const inputName = document.querySelector('#name')
const guest = document.querySelector('#guest')
const btn = document.querySelector('#btn')
const well_come = document.querySelector("#well-come")
const logout_btn = document.querySelector("#logout-btn")

function verificationState() {

    if (!localStorage.getItem('text')) {
        form.style.display = "block"
        well_come.style.display = "none"
    }else{
        form.style.display = 'none'
        guest.innerText = localStorage.getItem('text')
        well_come.style.display = 'block'
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('text', inputName.value);
    inputName.value = '';
    verificationState();
})


logout_btn.addEventListener('click', () => {
    localStorage.removeItem('text')
    verificationState()
})

verificationState()