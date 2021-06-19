const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/product');
const orderRoutes = require('./api/routes/product');



//nodemon is for auto server
//output on console
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Handle CORS Error
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTION'){
        res.header('Access-Control-Allow-Methods' , 'PUT, POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

//Routes handle req
app.use('/order', orderRoutes);
app.use('/product', productRoutes);
//Error handling
//Create error if route not found
app.use((req,res,next)=>{
    const error = new Error("not found");
    error.status =404;
    next(error);
});
//handle all error that create in whole project
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error :{
            message : error.message
        } 
    });
})
module.exports = app;