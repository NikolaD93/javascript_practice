//! Named Export
export const sayHello = () => {
    console.log('Hello!');
}
export const sayHi = () => {
    console.log('Hi!');
}
export const sayBye = () => {
    console.log('Bye!');
}

//! Default Export
const sumNumbers = (a, b) => {
    return a + b;
}

export default sumNumbers;

export const renderCars = () => {
    console.log('render cars')
}
