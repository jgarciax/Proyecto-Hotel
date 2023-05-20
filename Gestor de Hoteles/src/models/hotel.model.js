'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = Schema({
    namehotel: String,
    address: String,
    admin: {
        type: Schema.Types.ObjectId, ref: 'Users',
    },
    bedrooms: [{
        type: Schema.Types.ObjectId, ref: 'bedrooms',
        }
    ],
    events: [{
        event: {type: Schema.Types.ObjectId, ref: 'Events'},
        eventType: {type: String},
        }
    ],
    servicios: [{
        name: {type: Schema.Types.ObjectId, ref: 'Servicios'},
        price: {type: Number}
        }
    ]
})

module.exports = mongoose.model('Hotel', HotelSchema);