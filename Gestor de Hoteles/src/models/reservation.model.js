'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'Users',
        require: true
    },
    bedrooms: {
        type: Schema.Types.ObjectId, ref: 'Bedrooms',
        require: true
    },    
    servicios: [{
        type: Schema.Types.ObjectId, ref: 'Servicios',
        require: true
        }
    ],
    Hotel: {
        type: Schema.Types.ObjectId, ref: 'Hotel',
        require: true
    }
}) 

module.exports = mongoose.model('Reservation', ReservationSchema);