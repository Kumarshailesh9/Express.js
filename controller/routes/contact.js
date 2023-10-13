const path = require('path');
const express = require('express');
const contactController = require('../Controllers/contact');

const contactRoute = express.Router();

contactRoute.get('/contact', contactController.getContact);

contactRoute.post('/contact', contactController.postContact);

module.exports = contactRoute;