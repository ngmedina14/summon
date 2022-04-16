const express = require('express');
const router = express.Router();
const regController = require('../controllers/clientSummon');

router.get('/client',regController.client);

module.exports = router