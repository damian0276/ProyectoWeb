const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

//Aca conecto la base de datos mongodb
mongoose.connect('mongodb://localhost/dmDidacticos',{useUnifiedTopology: true, useNewUrlParser: true }).then(()=> console.log('db is conected')).catch(err=>console.log(err));


//settings//
//Para indicarle express la carpeta donde se encuentran los archivos estáticos
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.set('views',path.join(__dirname,'views'));

app.set('view engine', 'ejs');

// configuro el puerto por si el servidor ya me asigna uno//

app.set('port', process.env.PORT || 3030);



//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended: false}));





//Uso  a las rutas

const webRoutes = require('./routes/web');
const productRoutes = require('./routes/products')
const adminRoutes = require('./routes/admin')                                                                                                        



//llamo a las rutas
app.use(adminRoutes)
app.use(webRoutes);
app.use(productRoutes);








// Aca levanto el servidor 

app.listen(app.get('port'), ()=> console.log('Servidor funcionando en el puerto',app.get('port')));
