const mongoose = require('mongoose')
const tableSchema = require('./Table').schema

let daySchema = new mongoose.Schema({
    date: String,
    tables: [tableSchema]
})

let Day = mongoose.model('Day', daySchema)

module.exports = Day
module.exports.schema = daySchema