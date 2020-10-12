const express = require("express");
const router = express.Router();
const path = require("path");


// Requiero el dontrolador

const controllerProducts = require(path.resolve(__dirname,"..","controllers","controllerProducts"));


router.get('/products', controllerProduct.index);