const events = require("./events");

// events()

const {EventEmitter} = require('node:events')
// initialize event obj
const myEmitter = new EventEmitter()

myEmitter.on('log', (msg) => events(msg)) 
myEmitter.on('log', (msgTwo) => events(msgTwo))

setTimeout(() => {
    myEmitter.emit('log', 'Event Emitted ✅.')
    myEmitter.emit('log', 'Cure delivered ✅')
}, 3000)