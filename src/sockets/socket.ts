import { Socket } from 'socket.io';
import socketIO from 'socket.io';

export const desconectar = (cliente: Socket)=>{
    cliente.on('disconnect',() =>{
        console.log( `cliente desconectado con idesocket  ${cliente.id}`);
    });
}
// escuchar enviardni
export const escuchar_enviardni = (cliente: Socket, io: socketIO.Server)=>{
    cliente.on('enviardni',(payload:{dni:string}) =>{
        console.log('recibiendo evento enviardni',payload)        
        //enviar a todos
        let objetonuevo={
            id: cliente.id,
            dni: payload.dni
        };
        io.emit('mensaje-nuevo',`${JSON.stringify(objetonuevo)}`);
    })
}

