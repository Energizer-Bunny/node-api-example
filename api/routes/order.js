const express = require('express');
const router =  express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Haldling order get req'
    });
});
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'Haldling order post req'
    });
});
router.patch('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'Haldling order patch req',
        id : req.params.orderId
    });
});
router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'Haldling order delete req',
        id : req.params.orderId
    });
});
module.exports = router;