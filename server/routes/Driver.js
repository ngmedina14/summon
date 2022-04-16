const express = require('express');
const router = express.Router();
const controller = require('../controllers/driverSummon');

router.get('/driver',controller.driver);

module.exports = router