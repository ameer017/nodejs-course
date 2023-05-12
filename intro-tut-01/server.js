// How Node.js differs from vanilla js
// 1. Node runs on server and not on the browswer - 2. the console is on the terminal window and not on the browser window - 3. There is global object instead of window object - 4. Node makes use of core modules which has to do with operating system compared to vanilla - 5. the common js import to import the common core modules as well as other modules

const os = require('os');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir())
// console.log(__dirname)
// console.log(__filename)

// const path = require('path')
// console.log(path.dirname(__dirname))
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))

const math = require('./Math')
// console.log(inner)
// const add = math.add(10, 30)
// const multiply = math.multiply(30, 30)
// const subtract = math.subtract(30, 10)
// const divide = math.divide(40, 20)
// console.log(add)
// console.log(multiply)
// console.log(subtract)
// console.log(divide)
const uber = require('./array')
uber()

const time = require('./time')
time()

const fuel = require('./fuel')
const fuelStatus = fuel('Oga, na small fuel remain oo', 'Idan, how far? this fuel too much nau')
console.log(fuelStatus)
