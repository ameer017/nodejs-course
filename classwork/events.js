// Third party module
const {format} = require('date-fns')
const {v4: uuid} = require('uuid')

// core module
const fsPromises = require('fs/promises')
const fs = require('fs')
const path = require('path')

const events = async (info) => {
    const timeStamp = format(new Date(), 'dd-mm-yyyy\t\thh:mm:ss');
    // const msg = 'event logged'
    const display = `${timeStamp}\t${uuid()}\t${info}`
    // const delivery = `${timeStamp}\t${uuid()}\t${info}`

    try {
        if(!fs.existsSync(path.join(__dirname, 'directory'))) {
            fs.mkdir(path.join(__dirname, 'directory'), (err) => {
                if (err) throw err;
                console.log("directory created successfully")
            })
        }
        // else console.log('IDAN don dey already')
        await fsPromises.appendFile(path.join(__dirname, 'directory', 'event.txt' ), `${display}\n`)

    } catch (error) {
        console.log(error)
    }
    
}

module.exports = events