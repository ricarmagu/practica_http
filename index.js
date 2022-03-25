const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const routerApi = require('./src/routes');
const port = process.env.PORT || 3000;

/* Listen para activar el puerto */
app.listen(port, ()=>console.log('Using the port', port));

/* Solicitud HTTP - para correrlo en el navegador
http://localhost:5000/clase 
Respuesta como tal en formato de Json*/ 
app.use(express.json());

/* El mongoose para conectar la base de datos */
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log('Connect with mongoDB'))
    .catch((error) => console.error(error));

/* Enlaza las rutas con el src */
routerApi(app);