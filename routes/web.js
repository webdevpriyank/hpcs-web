const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const serviceController = require('../controllers/serviceController');

/**
 * App Routes 
*/
router.get('/', homeController.renderHomePage);
router.get('/about', homeController.renderAboutPage);
router.get('/contact', homeController.renderContactPage);

// Services
router.get('/services/anti-termite-treatment', serviceController.antiTermitePage);
router.get('/services/general-pest-control-service', serviceController.generalPestControlPage);
router.get('/services/rodent-control-service', serviceController.rodentControlTreatmentPage);
router.get('/services/herbal-pest-control-treatment', serviceController.herbalPestControlPage);
router.get('/services/cockroach-control-treatment', serviceController.cockroachControlPage);
router.get('/services/bird-netting-service', serviceController.birdNettingServicePage);
router.get('/services/wood-borer-treatment', serviceController.woodBorerTreatmentPage);

router.get('/services/industrial/fogging-service', serviceController.foggingServicePage);
router.get('/services/industrial/fumigation-service', serviceController.fumigationServicePage);

// City Wise Home Page
router.get('/pest-control-service-provider/city/silvassa', homeController.renderSilvassaHomePage);

// City Wise Service Page
router.get('/anti-termite-treatment/city/silvassa', serviceController.renderSilvassaTermitePage);
router.get('/anti-termite-treatment/city/vapi', serviceController.renderVapiTermitePage);
router.get('/anti-termite-treatment/city/valsad', serviceController.renderValsadTermitePage);

module.exports = router;