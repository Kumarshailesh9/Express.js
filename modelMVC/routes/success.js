const path = require('path');
const express = require('express');
const successController = require('../Controllers/success');

const successPage = express.Router();


successPage.get('/success', successController.getSuccess);

module.exports = successPage;