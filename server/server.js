const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const app = express();
const cors = require('cors')
let server = http.createServer(app);

//cors
app.use(cors())


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//Configurando Json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'view'));

app.use(require('./routers/index'));

// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});