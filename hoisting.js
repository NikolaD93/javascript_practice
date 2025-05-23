//? var/let/const
// var name = 'Alex';
// const age = 23;

//let & const are block-scoped
// function sayHello() {
//     if (true) { //(nearest block)
//         let name = 'Misa';
//         const age = 23;
//     }
//     // console.log(name)
//     console.log(age)

// }

// sayHello()

// //var is function-scoped
// function sayHello() {
//     if (true) { //(nearest block)
//         var name = 'Misa';
//         var age = 23;
//     }
//     console.log(age)

// }

//? Hoisting
// function sayHello() {
//     var message;
//     console.log(message);
//     var message = "hello world"
//     console.log(message)
//     return message;
// }
// sayHello()

// function sayHello() {
//     console.log(message);
//     let message = "hello world"
//     console.log(message)
//     return message;
// }
// sayHello()

//? Function hoisting
// sayHello();

// function sayHello() {
//     console.log('Hello world!')
// }

// let sayHello = function () {
//     console.log('Hello world')
// }

// sayHello()
