const express = require('express');
const router = express.Router();
const createNewServiceController = require('../controllers/createNewServiceController');

/**
 * App Routes 
*/
router.get('/createNewService', createNewServiceController.viewCreateService);
router.post('/createNewService', createNewServiceController.viewCreateService);

module.exports = router;