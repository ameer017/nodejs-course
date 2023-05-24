const data = {
    users: require('../models/users.json'),
    setUser: function(data) {
        this.users = data
    }
};

const fsPromises = require('fs/promises')
const path = require('path')
const bcrypt = require('bcrypt')