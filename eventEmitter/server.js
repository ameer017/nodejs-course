const logEvent = require("./logEvent");

// logEvent()

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}
// initialize event objs
const myEmitter = new MyEmitter()
// add event listener - on,once
myEmitter.on('log', (msg) => logEvent(msg))

setTimeout(() => {
    myEmitter.emit('log', 'Event Emitted Successfully')
}, 2000)