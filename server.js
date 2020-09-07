const hbs = require('hbs');
const express = require('express');
const routes = require('./routes');

const app = express();


/* Configuración de hbs */

// En donde deberá buscar los parciales hbs cuanto deba incluirlo en otro
hbs.registerPartials(__dirname + "/views/partials");


/* Configuración de express */

// El contenido estático que puede usar
app.use(express.static(__dirname + '/public'));
// Las rutas
app.use(routes);
// Configuro donde va a encontrar todos los html que debería mostrar
app.set('views', __dirname + '/views');
// Configuro el puerto de donde va a escuchar
app.set('port', process.env.PORT || 5000);
// Motor de plantilla
app.set('view engine', 'hbs');


/* Inicio de escucha del servidor */
app.listen(app.get('port'), () => {
    console.log(`Server escuchando en http://localhost:${app.get('port')}`)
});