var socket = io();

var labels = document.querySelectorAll('.ticket-secundario');

console.log(labels);

labels.forEach((element, i) => {
    console.log(element.target);
    console.log(i);
});

//Escuchar al servidor
socket.on('connect', function () {
    console.log('Sevidor Conectado');
});

socket.on('disconnect', function () {
    console.log('Servidor desconecado');
});

socket.on('ultimos4',function(res){
    console.log(res);

    var audio = new Audio('audio/new-ticket.mp3')

    audio.play();

    actulizaUltimos4(res.ultimos4);
})

function actulizaUltimos4(ultimos4) {
    for(var i = 0; i < ultimos4.length; i++){
        $("#lblTicket" + (i+1)).text('Ticket '+ ultimos4[i].numero);
        $('#lblEscritorio'+ (i+1)).text('Escritorio ' + ultimos4[i].escritorio);
    }
}