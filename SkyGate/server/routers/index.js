const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const errorHandler = require("../middleware/errorHandler");

// user
router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use(errorHandler)

module.exports = router
