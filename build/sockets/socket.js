"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log(`cliente desconectado con idesocket  ${cliente.id}`);
    });
};
// escuchar enviardni
exports.escuchar_enviardni = (cliente, io) => {
    cliente.on('enviardni', (payload) => {
        console.log('recibiendo evento enviardni', payload);
        //enviar a todos
        let objetonuevo = {
            id: cliente.id,
            dni: payload.dni
        };
        io.emit('mensaje-nuevo', `${JSON.stringify(objetonuevo)}`);
    });
};
//# sourceMappingURL=socket.js.map