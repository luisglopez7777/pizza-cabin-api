const mongoose = require('mongoose')

let reservationSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String
})

let Reservation = mongoose.model('Reservation', reservationSchema)

module.exports = Reservation
module.exports.schema = reservationSchema