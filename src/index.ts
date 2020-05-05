import express,{ Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import  indexRoutes  from './routes/indexRoutes';
import  gamesRoutes  from './routes/gamesRoutes';
import  pedidoRoutes  from './routes/pedidoRoutes';
import  menuPedido  from './routes/menuRoutes';
import  authRoutes from './routes/authRoutes';
import  culqiRoutes from './routes/culqiRoutes';
import * as socket from './sockets/socket';
import tablonRoutes from './routes/tablonRoutes';
import registroRoutes from './routes/registroRoutes'


class Server{
public app: Application;      
    constructor() {    
    this.app = express(); 
    this.config();
    this.routes();
    }    
    //configura el puerto definido o 5000
    config(): void{         
        this.app.set('port', process.env.PORT || 5000);
        this.app.use(morgan('dev'));// muestra los ms de las solicitudes al api
        this.app.use(cors());// hace que los servidores de back como de frond funcionen en un mismo proyecto
        this.app.use(express.json()); //aceptar formatos json... ejemplo req.body
        this.app.use(express.urlencoded({extended: false})) //enviar desde un formulario html
       
    }
    //rutas del servidor
    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gamesRoutes);
        this.app.use('/api/pedido',pedidoRoutes);
        this.app.use('/api/menu',menuPedido);
        this.app.use('/api/auth', authRoutes);
        this.app.use('/api/culqi', culqiRoutes);
        this.app.use('/api/tablon', tablonRoutes);
        this.app.use('/api/registro', registroRoutes);
    }
    //metodo para iniciar escuchando el puerto configurado y habilitar socket.io
    start() {        
        const servidor=this.app.listen(this.app.get('port'),()=>{
        console.log('Server on port',this.app.get('port'))}
        )
        var io  = require('socket.io').listen(servidor);
        
        io.on('connection', (clientes: any) => {
            console.log(`cliente conectado con idsocket ${clientes.id}`)
            //escuchar desconecciones
            socket.desconectar(clientes);
            //escuchar enviardni
            socket.escuchar_enviardni(clientes,io);
          
            
            
        });
        
    }
}
const server = new Server();
server.start();






