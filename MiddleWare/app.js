const express = require('express');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/add-product', (req, res, next) => {
    console.log("In the middleware!");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>');
});


app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next)=>{
    console.log("In the midleware!");
    res.send('<h1>Hello From Express</h1>');
});


app.listen(3000);


