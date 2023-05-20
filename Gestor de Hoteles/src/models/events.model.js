'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = Schema({
    event: String,
    eventType: String,
    date: Date,
    hotel: {
        type: Schema.Types.ObjectId, ref: 'Hotel'
    },
})

module.exports = mongoose.model('Events', EventSchema);