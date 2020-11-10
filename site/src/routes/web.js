const express = require("express");
const router = express.Router();
const path = require("path");


// Requiero el dontrolador

const controllerWeb = require(path.resolve(__dirname,"..","controllers","controllerWeb"));

//armo la ruta

router.get('/',controllerWeb.index);
router.get('/contacto',controllerWeb.contacto);
router.get('/nosotros',controllerWeb.nosotros);





module.exports = router;
