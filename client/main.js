var socket = io.connect('http://localhost:8080', {'forceNew': true});

socket.on('notificacion', function (data){
    console.log(data);
    rendernoti(data);
    })

function rendernoti (data){
    var html = data.map(function (elemento, index){
        return (`<div>
                     ${elemento.id}
                     ${elemento.text}
                </div>`)
    }).join(" ");
    document.getElementById('noti').innerHTML = html;
}

function nuevaNotificacion(e) {
    var datos = {
        id: document.getElementById('id').value,
        text: document.getElementById('text').value
    };
    socket.emit('nuevaNoti', datos);
    return false;
}
