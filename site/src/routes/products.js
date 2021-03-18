const express = require("express");
const router = express.Router();
const path = require("path");


// Requiero el dontrolador

const controllerProduct = require(path.resolve(__dirname, '..', 'controllers', 'controllerProduct'));


router.get('/productos', controllerProduct.productosIndex);






module.exports = router;