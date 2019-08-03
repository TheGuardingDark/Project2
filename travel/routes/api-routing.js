var db = require('../models');

module.exports = function (app) {
  // read all itinerary entries

  app.get('/api/itinerary', function (req, res) {
    db.Customer.findAll({
      where: {
        userId: req.user.user_id
      }
    }).then(function (dbCustomer) {
      res.json(dbCustomer);
    });
  });

  // read all flight info for customer

  app.get('/api/itinerary/flight/:user', function (req, res) {
    db.Flight.findAll({
      where: {
        CustomerId: req.body.CustomerId
      }
    }).then(function (dbFlight) {
      res.json(dbFlight);
    });
  });

  // read all transport info for customer

  app.get('/api/itinerary/transport/:user', function (req, res) {
    db.Transport.findAll({
      where: {
        CustomerId: req.body.CustomerId
      }
    }).then(function (dbTransport) {
      res.json(dbTransport);
    });
  });

  // read all lodging info for customer

  app.get('/api/itinerary/lodging/:user', function (req, res) {
    db.Lodging.findAll({
      where: {
        CustomerId: req.body.CustomerId
      }
    }).then(function (dbLodging) {
      res.json(dbLodging);
    });
  });

  // create new user

  app.post('/api/users', function (req, res) {
    db.Customer.create({
      customerName: req.user.name,
      userId: req.user.user_id,
      email: req.user.emails[0].value
    });
  });

  // create new flight info for user

  app.post('/api/itinerary/flight/:user', function (req, res) {
    db.Flight.create({
      airline: req.body.airline,
      flightConNum: req.body.conNum,
      dateStartFly: req.body.startDate,
      dateEndFly: req.body.endDate,
      flightTime: req.body.flightTime,
      flightNotes: req.body.notes,
      CustomerId: req.body.CustomerId
    }).then(function (dbFlight) {
      res.json(dbFlight);
    }).catch(function (err) {
      res.json(err.message);
    });
  });

  // create new transport info for user

  app.post('/api/itinerary/transport/:user', function (req, res) {
    db.Transport.create({
      dealer: req.body.dealer,
      carConNum: req.body.conNum,
      dateStartTran: req.body.startDate,
      dateEndTran: req.body.endDate,
      tranTime: req.body.tranTime,
      transportNotes: req.body.notes,
      CustomerId: req.body.CustomerId
    }).then(function (dbTransport) {
      res.json(dbTransport);
    }).catch(function (err) {
      res.json(err.message);
    });
  });

  // create new lodging info for user

  app.post('/api/itinerary/lodging/:user', function (req, res) {
    db.Lodging.create({
      lodgingName: req.body.lodgingName,
      lodgingConNum: req.body.conNum,
      dateStartLodg: req.body.startDate,
      dateEndLodg: req.body.endDate,
      lodgingNotes: req.body.notes,
      CustomerId: req.body.CustomerId
    }).then(function (dbLodging) {
      res.json(dbLodging);
    }).catch(function (err) {
      res.json(err.message);
    });
  });

  // delete user

  app.delete('/api/users:id', function (req, res) {
    db.Customer.destroy({
      where: {
        userId: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // delete flight info for user

  app.delete('/api/flight:id', function (req, res) {
    db.Flight.destroy({
      where: {
        userId: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // delete transport info for user

  app.delete('/api/transport:id', function (req, res) {
    db.Transport.destroy({
      where: {
        userId: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // delete lodging info for user

  app.delete('/api/lodging:id', function (req, res) {
    db.Lodging.destroy({
      where: {
        userId: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // update user info

  app.put('/api/users', function (req, res) {
    db.Customer.update({
      customerName: req.user.name,
      email: req.user.email
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // update flight info for user

  app.put('/api/flight', function (req, res) {
    db.Flight.update({
      airline: req.body.airline,
      flightConNum: req.body.conNum,
      dateStartFly: req.body.startDate,
      dateEndFly: req.body.endDate,
      flightTime: req.body.flightTime,
      flightNotes: req.body.notes
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (dbFlight) {
      res.json(dbFlight);
    });
  });

  // update transport info for user

  app.put('/api/transport', function (req, res) {
    db.Transport.update({
      dealer: req.body.dealer,
      carConNum: req.body.conNum,
      dateStartTran: req.body.startDate,
      dateEndTran: req.body.endDate,
      tranTime: req.body.tranTime,
      transportNotes: req.body.notes
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (dbTransport) {
      res.json(dbTransport);
    });
  });

  // update lodging info for user

  app.put('/api/lodging', function (req, res) {
    db.Lodging.update({
      lodgingName: req.body.lodgingName,
      lodgingConNum: req.body.conNum,
      dateStartLodg: req.body.startDate,
      dateEndLodg: req.body.endDate,
      lodgingNotes: req.body.notes
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (dbTransport) {
      res.json(dbTransport);
    });
  });
};
