let availableUber = true;
const clientMakeOrder = false

const uberReady = () => {
    if(availableUber && clientMakeOrder) console.log('uber is ready to move')
    else if(availableUber && !clientMakeOrder) console.log('uber dey available,we no see customer')
    else console.log('Uber no dey available')
}

module.exports = uberReady