const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const errorHandler = require("../middleware/errorHandler");
const AirportController = require("../controllers/AirportController");

// user
router.post('/register', UserController.register)
router.post('/login', UserController.login)

// Airport
router.get('/airports', AirportController.getAirport)


router.use(errorHandler)

module.exports = router
