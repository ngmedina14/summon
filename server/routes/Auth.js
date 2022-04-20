const express = require('express');
const router = express.Router();
const controller = require('../controllers/authSummon');

router.get('/check-login/:username/:password',controller.login);
router.get('/get-driver/:driver_id',controller.getDriver);
router.post('/create-user/',controller.createUser);

module.exports = router