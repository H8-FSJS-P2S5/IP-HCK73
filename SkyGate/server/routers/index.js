const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const errorHandler = require("../middleware/errorHandler");
const AirportController = require("../controllers/AirportController");
const isAuthenticate = require("../middleware/isAuthenticate");

// user
router.post('/register', UserController.register)
router.post('/login', UserController.login)

// Airports & Reviews
router.get('/airports', isAuthenticate, AirportController.getAirport)
router.get('/airports/:airportCode', isAuthenticate, AirportController.getAirportDetail)
router.post('/airports/:airportCode/reviews', isAuthenticate, AirportController.addReview)

router.use(errorHandler)

module.exports = router
