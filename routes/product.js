
const express = require('express');
const productData = require('../data/products.json')

// console.log(productData)

// Initialize router objects
const router = express.Router();


router.get('/',(req,res)=>{
    res.json(productData);
})

router.get('/:productID',(req,res)=>{

    const {productID} = req.params
    const product = productData.find((product) => product.id === Number(productID))
    res.json(product ? product : "Index Not Found")
})

router.post("/",(req,res)=>{

})

module.exports = router;