let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

let notificacionesArray = []; //hay que buscar una solucion escalable

app.use(express.static('client'))

app.get('/', function (req,res){
    res.status(200).send("Server up");
    });

io.on('connection', function (socket){
    console.log('Se conecto un cliente') //.log de testeo
    //socket.emit('notificacion', notificacionesArray); //pushea las notificaciones
    socket.on('nuevaNoti', function (data){//escucha el evento "nuevaNoti y lanza la funcion"
        notificacionesArray.push(data);
        io.sockets.emit('notificacion', notificacionesArray); // emite el evento notificacion cuando escucha una "nuevaNoti"
    });
});

server.listen(8080, function (){
    console.log("nodemon test") //more testing
});