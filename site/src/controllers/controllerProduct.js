const path = require('path');
const fs = require('fs');
const faker = require('faker');
const Product = require('../dataBase/models/product');




module.exports = {
    productosIndex:(req,res)=>{
       res.render(path.resolve(__dirname, '..', 'views','products','productos'))    
      
    },
    page:(req,res)=>{
        let perPage = 9;
        let page = req.params.page || 1;
         
        Product
        .find({})
        .skip((perPage*page) - perPage)
        .limit(perPage)
        .exec((err,products)=>{
            Product.count((err,count)=>{
                if(err)return next (err);
                res.render('../products/productos',{
                    products,
                    current:page,
                    pages:Math.ceil(count / perPage)
                })
            })
        })
    },

   
    


}