const express = require("express");
const router = express.Router();
const path = require("path");


// Requiero el dontrolador

const controllerProducts = require(path.resolve(__dirname,"..","controllers","controllerProducts"));


router.get('/productos', controllerProducts.index);






module.exports = router;