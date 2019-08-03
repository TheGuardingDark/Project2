var express = require('express');
var router = express.Router();
var trips = require('../models/tripName.js');

router.get('/trips', function (req, res) {
  trips.call(function (data) {
    var tripObj = {
      trips: data
    };
    console.log(tripObj);
  });
});

// router.get('/trips', function (req, res) {
//   res.render('index', { tripPlans: trips });
// })

// router.post();

module.exports = router;
