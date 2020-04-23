import express,{ Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import  indexRoutes  from './routes/indexRoutes';
import  gamesRoutes  from './routes/gamesRoutes';
import  pedidoRoutes  from './routes/pedidoRoutes';
import  menuPedido  from './routes/menuRoutes';
import  authRoutes from './routes/authRoutes';
import  culqiRoutes from './routes/culqiRoutes';




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
    }
    //metodo para iniciar escuchando el puerto configurado y habilitar socket.io
    start(): void{        
        const servidor=this.app.listen(this.app.get('port'),()=>{
        console.log('Server on port',this.app.get('port'))}
        )
        var io  = require('socket.io').listen(servidor);
        io.on('connection', function(socket: { emit: (arg0: string, arg1: string) => void; }){
            console.log('un usuario se conecto')
            socket.emit('test event','Hola hola mutante') 
        });
    }
}
const server = new Server();
server.start();





