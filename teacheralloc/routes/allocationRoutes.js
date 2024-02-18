const express = require('express');
const router = express.Router();
const allocationController = require('../controllers/allocationController');

router.get('/', allocationController.getAllotment);

module.exports = router;
