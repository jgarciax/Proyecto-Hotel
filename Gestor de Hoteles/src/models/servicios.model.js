'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicioSchema = Schema({
    name: String,
    price: Number,
    hotel: {
        type: Schema.Types.ObjectId, ref: 'Hotel'
    }
})

module.exports = mongoose.model('Servicios', ServicioSchema);