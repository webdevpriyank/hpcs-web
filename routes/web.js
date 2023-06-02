const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

/**
 * App Routes 
*/
router.get('/', homeController.renderHomePage);
router.get('/about', homeController.renderAboutPage);
router.get('/contact', homeController.renderContactPage);

module.exports = router;