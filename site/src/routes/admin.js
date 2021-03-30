const express = require('express');
const router = express.Router();
const path = require('path');









const controllerAdmin = require(path.resolve(__dirname,"..","controllers","controllerAdmin"));

router.get('/administrar',controllerAdmin.administrar);
router.get('/addProduct',(req,res) =>{
    res.render('admin/addProduct')
})
router.post('/addProduct',controllerAdmin.addProduct);



module.exports = router;
