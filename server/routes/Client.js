const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientSummon');

router.get('/check-appointment/:appointment_id',controller.checkAppointment);
router.get('/check-completed-transaction/:transaction_id',controller.checkCompletedTransaction);
router.post('/add-appointment',controller.addAppointment);
router.get('/get-history/:user_id',controller.getHistory);

module.exports = router