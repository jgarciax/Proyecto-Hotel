'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
    rol: {
        type: String,
        String: ['ADMINHOTEL', 'CLIENT'],
        require: true,
    }
});

module.exports = mongoose.model('Users', userSchema);