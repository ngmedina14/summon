const express = require('express');
const router = express.Router();
const controller = require('../controllers/driverSummon');

router.get('/get-appointment',controller.getAppointment);
router.get('/get-advance-appointment',controller.getAdvanceAppointment);
router.get('/get-user/:user_id',controller.getUser);
router.get('/check-appointment/:appointment_id',controller.checkAppointment);
router.post('/add-transaction',controller.addTransaction);
router.post('/pick-up-appointment',controller.pickUpAppointment);
router.post('/cancel-appointment',controller.cancelAppointment);
router.post('/complete-transaction',controller.completeTransaction);
router.get('/get-toda/:toda_id',controller.getToda);
router.get('/get-transaction/:transaction_id',controller.getTransaction);
router.get('/get-history/:driver_id',controller.getHistory);


module.exports = router