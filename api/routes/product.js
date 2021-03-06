const express = require('express');
const router =  express.Router();
const mongoose = require('mongoose')
const Product = require('../models/product');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Haldling get req'
    });
});


router.post('/',(req,res,next)=>{
    const product = new Product({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        price: req.body.price
    });
    product.save().then(result => {
        console.log(result);
        res.status(201).json({
            message:'Haldling post req',
            product:product
        });
    })
    .catch(err=>{console.log(err)
    res.status(500).json({
        error : err
    });
});
    
});


router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc =>{
        console.log("from db ", doc);
        if(doc){
            res.status(200).json(doc)
        }
        else{
            res.status(404).json({message:'no valid entry found for provided ID'});
        }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
});


router.patch('/:productId',(req,res,next)=>{
    const id = req.params.productId;
        res.status(200).json({
            message:'Update id',
            id : id
        });
});



router.delete('/:productId',(req,res,next)=>{
    const id = req.params.productId;
        res.status(200).json({
            message:'delete id',
            id : id
        });
});
module.exports = router;