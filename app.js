const express = require('express');
const {getConnection} = require('./DB/conection');
const cors = require('cors');
require('dotenv').config();


const app = express();

app.use (cors 
    ({
        origin: '*'
    })
);

getConnection();

//PARSEO JSON

app.use(express.json());
app.use(express.urlencoded({ extended: false}));


//declaracion de rutas para acceso a controladores
const proyectos = require('./routes/ProyectoRoutes');
const etapas = require('./routes/EtapasRoutes');
const clientes = require('./routes/ClientesRoutes');
const universidad = require('./routes/UniversidadRoutes');
const tipoProyecto = require('./routes/TipoProyectoRoutes');


//aplicacion del midware y routes predefinidos
app.use('/api/proyectos', proyectos);
app.use('/api/etapas', etapas);
app.use('/api/clientes', clientes);
app.use('/api/universidad', universidad);
app.use('/api/tipoProyecto', tipoProyecto);


module.exports = app;