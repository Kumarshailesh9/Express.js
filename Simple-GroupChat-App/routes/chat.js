const exp = require('constants');
const express = require('express');
const fs = require('fs');

const  chat = express.Router();


chat.get('/',(req,res,next)=>{
    fs.readFile('message.html', 'utf8', (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
      
       // console.log(data); 
    res.send(`<html>
                <head>
                </head>
                <body>
                    <h4>${data.toString()}</h4>
                    <form action="/message" method="POST" onsubmit="document.getElementById('name').value = localStorage.username">
                        <input type="text" id="sms" name="sms">
                        <input type="hidden" id="name" name="name"/>
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>`);
        });
});

chat.post('/message',(req,res,next)=>{
    const user = req.body.name;
    const message = req.body.sms;
    fs.appendFileSync('message.html', ` ${user}: ${message} </br>`);
    res.redirect('/');
});


module.exports = chat;