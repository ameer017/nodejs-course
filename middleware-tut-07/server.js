const express = require('express')
const app = express()
const path  = require('path');
const { logger } = require('./middleware/logEvent')

const PORT = process.env.PORT || 3500

// custom middleware
app.use(logger)

// built-in middleware to handle url-encoded data :
// content-type: application/x-www-form-urlencoded

app.use(express.urlencoded({extended: false}))

// built-in middleware for json data
app.use(express.json())

// server static file
app.use(express.static('./public'))


app.get('^/$|index(.html)?', (req, res) => {
    // res.sendFile('./views/index.html', {root: __dirname})
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('^/$|new-page(.html)?', (req, res) => {
    // res.sendFile('./views/index.html', {root: __dirname})
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})

app.get('/old-page.html', (req, res) => {
    res.redirect(301, path.join(__dirname, 'views', 'new-page.html'))
})

// catch all routes to get error 404 page
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})

// application level middleware
// app.get('/', (req, res, next) => {
//     console.log('attempting a request')
//     next();
// },
// (err, res, next) => {
//     console.log('second request made')
//     next()
// },
// (req, res) => {
// console.log('final request')
//     res.send('hello world')
// })

// const first = (req, res, next) => {
//     console.log('attempting a request')
//     next();
// }
// const second =  (err, res, next) => {
//     console.log('second request made')
//     next()
// }
// const third = (req, res) => {
// console.log('final request')
//     res.send('hello world')
// }

// const requests = [first, second, third]

// app.get('/', requests)


app.listen(PORT, () => {
    console.log(`server listening ${PORT}`)
})

