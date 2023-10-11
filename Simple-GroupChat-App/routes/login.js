const express = require('express');

const login = express.Router();

login.get('/login' ,(req,res,next)=>{
    res.send(`<html>
    <head><title>Document</title></head>
    <body><form action="/chat" method="POST" onsubmit="localStorage.setItem('username',document.getElementById('name').value)"><input type="text" id="name" name="title"  placeholder="username"><button type="submit">Login</button></form></body>
    </html>`);
 });

 login.post('/chat',(req,res)=>{
    const user = req.body.title;
    console.log(user);
    res.redirect('/');
});

module.exports= login;