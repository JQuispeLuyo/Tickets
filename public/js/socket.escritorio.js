var socket = io();
var searchParams = new URLSearchParams(window.location.search);

var label = $('small');


if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');

console.log(escritorio);

$('h1').text('Escritorio ' +escritorio);

$('button').on('click', function(){

    socket.emit('atenderTicket', {
        escritorio: escritorio
    },function(res){

        if(res === 'No hay tickets'){
            alert(res);
            return
        }

        label.text('Ticket ' + res.numero);
    });

});










//Escuchar al servidor ".on"
socket.on('connect',function(){
    console.log('Servidor conectado');
});

socket.on('disconnect', function(){
    console.log('Servidor desconectado');
});