//comando para establecer la comunicacion

var socket = io();
var label = $('#lblNuevoTicket');

//Escuchar al servidor ".on"
socket.on('connect',function(){
    console.log('Servidor conectado');
});

socket.on('disconnect', function(){
    console.log('Servidor desconectado');
});

socket.on('ultimoTicket',function(res){
    label.text(res.actual);
});

$('button').click(function(){

    socket.emit('siguienteTicket', null,function(res){
        label.text(res)
    });
});