const path = require('path');
const express = require('express');


const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactPage = require('./routes/contact');
const successPage = require('./routes/success');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(contactPage);
app.use(successPage);
app.use('/admin',adminRoutes);
app.use(shopRoutes);





app.use((req,res,next)=> {
    res.status(404).sendFile(path.join(__dirname, 'views' ,'404.html'));
});




app.listen(3000);