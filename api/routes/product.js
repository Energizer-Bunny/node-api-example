const express = require('express');
const router =  express.Router();
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Haldling get req'
    });
});
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'Haldling post req'
    });
});
router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    if(id=== 'special'){
        res.status(200).json({
            message:'Discover a special id',
            id : id
        });
    }
    else{
        res.status(200).json({
            message:'pass an id',
            id : id
        });
    }
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