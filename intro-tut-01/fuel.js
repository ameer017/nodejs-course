const fuelMin = 51;
const fuelMax = 250;

const fuelLimit = (minError, maxError) => {
    if(fuelMin <= 50) return minError
    else if (fuelMax > 250) return maxError
    else console.log('Fuel limit is okay, carry on!!')
}

module.exports = fuelLimit


