const path = require('path');
const fs = require('fs');
const faker = require('faker');
const Product = require('../dataBase/models/product');




module.exports = {
    administrar:(req,res)=>{
        res.render(path.resolve(__dirname, '..', 'views','admin','administrar',))

    },
    addProduct: function(req,res){
        const product = new Product();
        product.category = req.body.category_name;
        product.name = req.body.product_name;
        product.price = req.body.product_price
        product.cover = faker.image.image();
        product.save(err=>{
            if(err) return next(err);
            res.redirect('/addProduct');
        })
     }
}