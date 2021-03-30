const express = require("express");
const router = express.Router();
const path = require("path");

//Requiero Faker para ejemplos (pasar desp a controlador)
const faker = require('faker');
const Product = require('../dataBase/models/product');
const { nextTick } = require("process");


// Requiero el controlador

const controllerProduct = require(path.resolve(__dirname, '..', 'controllers', 'controllerProduct'));

router.get('/productos', controllerProduct.productosIndex);


router.get('/products/:page',controllerProduct.page)



router.get('/generate-fake-data', (req,res)=>{
    for(let i = 0 ; i<10 ; i++){
        const product = new Product();
        product.category = faker.commerce.department();
        product.name = faker.commerce.productName();
        product.price = faker.commerce.price();
        product.cover = faker.image.image();
        product.save(err=>{
            if(err){return next(err);}
        });       
    }
    res.redirect('/addProduct');
})






module.exports = router;