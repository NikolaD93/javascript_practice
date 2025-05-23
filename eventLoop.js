//? Event Loop = task that keeps checking if there are any items in the callback queue and forwards them to the call stack but only if call stack is empty.
// JS is single-threaded - it can proccess one instruction at a time.

// console.log('A');
// setTimeout(() => {
//     console.log('B');
// }, 0);
// console.log('C');

//! Call Stack
// console.log('A');
// console.log('B');

// function init() {
//     console.log('A');
//     console.log('B');
// }

// init()

//! Callback queue
// setTimeout(function logA() {
//     console.log('A')
// }, 5000);

//! Web APIs

//! Event loop
// setTimeout(function logA() {
//     console.log('A')
// }, 5000);
// setTimeout(function logB() {
//     console.log('B')
// }, 5000);
// setTimeout(function logC() {
//     console.log('C')
// }, 5000);
