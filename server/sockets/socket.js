const {io} = require("../server")

io.on('connection', (client) => {
	console.log('usuario conectado')
	client.on('disconnect', () => {
		console.log('Usuario desconectado')
	})

	client.emit('enviarMensaje', {
		usuario: 'Administrador',
		mensaje: 'Welcome a esta aplicación'
	})

	client.on('MensajeEnviado', (data) => {
		client.broadcast.emit('EnviarMensaje', data)
	})
})
