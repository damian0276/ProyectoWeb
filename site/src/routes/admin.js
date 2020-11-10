const express = require('express');
const router = express.Router();
const path = require('path');









const controllerAdmin = require(path.resolve(__dirname,"..","controllers","controllerAdmin"));

router.get('/administrar',controllerAdmin.administrar);



module.exports = router;
