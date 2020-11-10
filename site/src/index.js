const express = require("express");
const app = express();
const path = require("path");



//Para indicarle express la carpeta donde se encuentran los archivos estáticos
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.set('view engine', 'ejs');

//Uso  a las rutas

const webRoutes = require('./routes/web.js');
const productRoutes = require('./routes/products.js')
const adminRoutes = require('./routes/admin.js')                                                                                                        



//llamo a las rutas
app.use(adminRoutes)
app.use(webRoutes);
app.use(productRoutes);












// Aca levanto el servidor

app.listen(3030,'localhost', ()=> console.log('Servidor funcionando en el puerto 3030'));
