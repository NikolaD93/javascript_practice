//JS Modules
//Import/Export

// const hello = require('./hello').default;
//! Named Import
import { sayHello, sayHi, sayBye, renderCars } from './hello.js'
import { getAllCars, getCar } from './fetchCars.js'

//! Default Import
import pera from './hello.js'


// console.log(sayHello())
// console.log(pera(3, 3))
// renderCars()
// const cars = await getAllCars()
// console.log(cars[0].updatedAt)

// const singleCar = await getCar('681f6a7947ad680fe25c5fb6');
// console.log(singleCar)