const express = require('express');
const bodyParser = require('body-parser');
const loginRoute = require('./routes/login');
const chatPage = require('./routes/chat');


const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.use(loginRoute);
app.use(chatPage);





app.listen(3000);

