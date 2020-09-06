var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const Day = require('../models/Day').model

//Parameters for route
// {
//   date: String("Dec 29 2019") algo asi
// }

router.post('/', function (req, res, next) {
  console.log('request attempted')
  console.log(req.body)

  const dateTime = new Date(req.body.date)
  Day.find({ date: dateTime }, (err, docs) => {
    if (!err) {
      if (docs.length > 0) {
        // Record already exist
        console.log('Record exists. Sent docs')
        res.status(200).send(docs[0])
      } else {
        // Searched date does not exist and we need to create it
        const allTables = require('../data/allTables')
        const day = new Day({
          date: dateTime,
          tables: allTables
        })
        day.save(err => {
          if (err) {
            res.status(400).send('Error saving new data')
          } else {
            //Saved date and need to return all tables
            console.log('Created new datetime. Here are default docs')
            Day.find({ date: dateTime }, (err, docs) => {
              err ? res.status(400) : res.status(200).send(docs[0])
            })
          }
        })
      }
    } else {
      res.status(400).send('Could not search for date')
    }
  })
});

module.exports = router;
