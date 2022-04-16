const express = require('express');
const router = express.Router();
const controller = require('../controllers/authSummon');

router.post('/login',controller.register);

module.exports = router