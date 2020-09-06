const mongoose = require('mongoose')

const reservationSchema = require('./Reservation').schema

let tableSchema = new mongoose.Schema({
    name: String,
    capacity: Number,
    isAvailable: Boolean,
    location: String,
    reservation: {
        required: false,
        type: reservationSchema
    }
})

let Table = mongoose.model('Table', tableSchema)

module.exports = Table
module.exports.schema = tableSchema