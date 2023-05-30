const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, require: true},
    roles: {
        User: {type: Number, default: 4000},
        Admin: {type: Number},
        Editor: {type: Number}
    },
    password: {type: String, require: true},
    refreshToken: String
})

// or
// module.exports = mongoose.model('User', userSchema)
const user = mongoose.model('User', userSchema)

module.exports = user