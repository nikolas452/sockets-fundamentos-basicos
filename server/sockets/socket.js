const { io } = require('../server');


io.on('connection', (client) => {
    console.log('usuario conectado');

    // enviar info al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });




    // escuchar cliente
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);


        /* if (mensaje.usuario) {
            callback({
                resp: 'Todo salio bien'
            });
        } else callback({ resp: 'Todo salio mal' });
 */


    });
});