const path = require('path');
const express = require('express');
const successPage = express.Router();
const rootDir = require('../util/path');

successPage.get('/success', (req,res)=>{
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
});

module.exports = successPage;