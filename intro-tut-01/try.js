// const fuelMin = 100

const sound = require('play-sound')();

if (condition) {
  sound.play('./horse-123780.mp3', (err) => {
    if (err) console.log(`Error: ${err}`);
  });
}

