var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')

const Day = require('../models/Day').model
const Reservation = require('../models/Reservation').model


router.get('/', function (req, res, next) {
    Day.find({ date: req.body.date }, (err, docs) => {
        if (!err) {
            if (days.length > 0) {
                let days = days[0]
                days.tables.forEach(table => {
                    if (table._id == req.body.table) {
                        //Correct table is table
                        table.reservation = new Reservation({
                            name: req.body,
                            phone: req.phone,
                            email: req.email
                        })
                        table.isAvailable = false
                        days.save(err => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log('reserved')
                                res.status(200).send("Added Reservation")
                            }
                        })
                    }
                })
            } else {
                console.log('Day not found')
            }
        }
    })
});

module.exports = router;