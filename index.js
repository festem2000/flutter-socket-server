// ===============================================================================================

const express = require('express');

// Para definir nuestra carpeta pública
const path = require('path');

// Importamos el paquete => dentro del config podemos configurar algunas reglas
require('dotenv').config();


// Variable de Express para poder escuchar y emitir peticiones
const app = express();


/// CREACIÓN DE UN SERVER EN NODE
// Pasandole esa variable como parametro configura todo como lo tiene Express
const server = require('http').createServer(app);
// Para poder exportar el IO a otros archivos
module.exports.io = require('socket.io')(server);

require('./sockets/socket.js');
//==============================================================================================
// FIN SECCIÓN DE IMPORTACIONES


//================================================================================================
// SECCIÓN PARA CONFIGURAR EL SERVIDOR PRINCIPAL

/* Path público*/
// __dirname ==> apunta a la direccion donde esta el servido montado
// 'public' es la carpeta publica de nuestro servidor
const publicPath = path.resolve(__dirname, 'public');


// Al hacer una peticiones le mostramos lo que esta en la carpeta publica
app.use(express.static(publicPath));


// Escucha las peticiones
server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en puerto', process.env.PORT);

});

//==================================================================================================