// Processess allTables JSON file into Mongo Table Objects

const mongoose = require('mongoose')
const Table = require('../models/Table').model
const fs = require('fs')

const tableData = fs.readFileSync(__dirname + "/allTables.json")
tableData = JSON.parse(tableData).tables

let allTables = []

tableData.forEach(table => {
    allTables.push(new Table(table))
})