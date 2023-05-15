const {format} = require('date-fns');
const {v4: uuid} = require('uuid')

// const abc = uuid.v4()
// console.log(abc)

const dateTime = format(new Date(), 'yyyy-mm-dd\t hh-mm-ss' )
console.log(dateTime)
console.log(uuid())