//? Closure = when an inner function has access to the outer function's variables.
// const minAge = 18;


// const canVote = (age) => {
//     if (age >= minAge) {
//         console.log('can Vote')
//     }
// }

// const createUser = () => {
//     console.log(minAge)
//     console.log(age)
// }

// canVote(22)
// createUser()

const Navbar = () => { //outer function
    let darkTheme = false;

    const handleClick = () => {
        console.log(darkTheme)
    } //inner function
}

//? Closure scope chains
const maxAge = 18;

const init = () => { //outer function
    const button = document.querySelector('button')
    const age = Number.parseInt(document.querySelector('#age').value, 10)

    button.addEventListener('click', () => {//inner function
        const isValid = true;
        console.log(isValid)
        console.log(age)
        console.log(maxAge)
        console.log(button)
    })

}

const age = 23;

const test123 = () => {
    console.log(age)
    let fruit = 'mango'
    console.log(card)

    const test44 = () => {
        let card = 'ace'
        console.log(card)
        console.log(age)
        console.log(fruit)
    }
    test44()
}

test123()