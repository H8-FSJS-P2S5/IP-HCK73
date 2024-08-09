const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const errorHandler = require("../middleware/errorHandler");
const AirportController = require("../controllers/AirportController");
const isAuthenticate = require("../middleware/isAuthenticate");
const isAuthorize = require("../middleware/isAuthorize");

// user
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/auth/google', UserController.googleLogin);

// Airports & Reviews
router.get('/airports', isAuthenticate, AirportController.getAirport)
router.get('/airports/:airportCode', isAuthenticate, AirportController.getAirportDetail)
router.post('/airports/:airportCode/chatbot', isAuthenticate, AirportController.chatbot)
router.post('/airports/:airportCode/reviews', isAuthenticate, AirportController.addReview)
router.put('/airports/:airportCode/reviews/:id', isAuthenticate, isAuthorize, AirportController.updateReview)
router.delete('/airports/:airportCode/reviews/:id', isAuthenticate, isAuthorize, AirportController.deleteReview)

router.use(errorHandler)

module.exports = router
