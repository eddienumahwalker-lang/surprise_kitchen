var express = require('express');
var router = express.Router();

const reservations = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST reservation/contact message from React */
router.post('/api/reservations', function(req, res) {
  const reservation = {
    id: Date.now(),
    name: req.body.name,
    people: req.body.people,
    date: req.body.date,
    message: req.body.message
  };

  reservations.push(reservation);
  console.log('Reservation saved:', reservation);

  res.status(201).json({
    ok: true,
    message: 'Reservation received by Express backend!',
    reservation
  });
});

/* GET all reservations */
router.get('/api/reservations', function(req, res) {
  res.json(reservations);
});

module.exports = router;