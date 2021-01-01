var socket = io();

// Escuchar
socket.on('connect', function () {
	console.log('Conectado al servidor')
})

socket.on('disconnect', () => {
	console.log('perdimos conección con el servidor')
})

// Enviar información
socket.emit('MensajeEnviado', {
	usuario: 'Dekk',
	mensaje: 'Hello world :D'
}, function (resp) {
	console.log('Respuesta', resp)
})

// Escuchar información
socket.on('EnviarMensaje', function (mensaje) {
	console.log("Servidor", mensaje)
})



