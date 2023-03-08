const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.showContactForm);
router.post('/', contactController.sendContactMessage);

module.exports = router;