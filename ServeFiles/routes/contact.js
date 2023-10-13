const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const contactRoute = express.Router();

contactRoute.get('/contact', (req, res ,next)=>{
    res.sendFile(path.join(rootDir, 'views' , 'contact.html'));
});

contactRoute.post('/contact', (req, res, next)=>{
    res.redirect('/success');
});

module.exports = contactRoute;