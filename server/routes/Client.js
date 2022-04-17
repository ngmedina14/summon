const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientSummon');

// router.get('/client',controller.client);
router.post('/add-appointment',controller.addAppointment);

module.exports = router