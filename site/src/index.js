const express = require("express");
const app = express();
const path = require("path");


//Para indicarle express la carpeta donde se encuentran los archivos estáticos
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.set('view engine', 'ejs');

//Uso  a las rutas

const webRoutes = require('./routes/web.js')



//llamo a las rutas

app.use(webRoutes);











// Aca levanto el servidor

app.listen(3000,'localhost', ()=> console.log('Servidor funcionando en el puerto 3000'));
