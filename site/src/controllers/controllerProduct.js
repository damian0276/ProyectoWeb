const path = require('path');
const fs = require('fs');
const faker = require('faker');
const product = require('../dataBase/models/product');




module.exports = {
    productosIndex:(req,res)=>{
        product.find({})
        .then(products => {
            res.render(path.resolve(__dirname, '..', 'views','products','productos'),{products});          
        })
        .catch(err => res.send(err))       
    },
    

   detail:(req,res)=>{
    product.find(req.params.id,)
    .then(products => {
        res.render(path.resolve(__dirname, '..', 'views','products','productDetail'),{products});          
    })
    .catch(err => res.send(err))
   }
    


}