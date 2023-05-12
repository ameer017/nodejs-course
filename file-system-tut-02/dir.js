const fs = require('fs')
const path = require('path')

// creating a folder inside file

if(!fs.existsSync(path.join(__dirname, 'files', 'directory'))) {
    fs.mkdir(path.join(__dirname, 'files', 'directory'), (err) => {
        if (err) throw err;
        console.log("directory created successfully")
    })
}else console.log('IDAN don dey already')


// if(!fs.existsSync(path.join(__dirname, 'files', 'folder'))) {
//     fs.rmdir(path.join(__dirname, 'files', 'folder'), (err) => {
//         if (err) throw err;
//         console.log("directory created successfully")
//     })
// }else console.log('Directory deleted succesfully')
