// const fsPromise = require('fs').promises
const fsPromises = require('fs/promises')
const path = require('path')

const fsOperations = async () => {
    // readFile
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), {encoding: 'utf8',})
        console.log(data)


            // create/write file
        const write = await fsPromises.writeFile(path.join(__dirname, 'new-files', 'alpha.txt'), data)
        // console.log(write)

        // update file
        const update = await fsPromises.appendFile(path.join(__dirname, 'new-files', 'alpha.txt'), "\n\nHello, i have been updated")
        // console.log(update)

        // rename file 
        const rename = await fsPromises.rename(path.join(__dirname, 'new-files', 'alpha.txt'), path.join(__dirname, 'files', 'new-write.txt'), "\n\nHello, i have been renamed")
        console.log(rename)

        await  fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'), console.log('file deleted successfully'))
    } catch (error) {
        console.log(error)
    };

    try {
        const agbado = await fsPromises.readFile(path.join(__dirname, 'files', 'main.js'), {encoding: 'utf8'})
        console.log(agbado)
    } catch (error) {
        console.log(error)
    }



}

fsOperations()