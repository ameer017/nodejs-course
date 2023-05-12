const displayCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${hours}:0${minutes}:${seconds}`;
    console.log(timeString);
  }
  
  module.exports = displayCurrentTime