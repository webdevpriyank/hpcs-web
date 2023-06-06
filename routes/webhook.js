const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhookController');

/**
 * App Routes 
*/
router.get('/', webhookController.webhookGet);
router.post('/', webhookController.webhookPost);
router.post('/sendMessage', webhookController.sendMessage);
router.get('/sendMessage', webhookController.sendMessageForm);

module.exports = router;