const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhookController');

/**
 * App Routes 
*/
router.get('/', webhookController.webhookGet);
router.post('/', webhookController.webhookPost);

module.exports = router;