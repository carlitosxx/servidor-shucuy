"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
const pedidoRoutes_1 = __importDefault(require("./routes/pedidoRoutes"));
const menuRoutes_1 = __importDefault(require("./routes/menuRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const culqiRoutes_1 = __importDefault(require("./routes/culqiRoutes"));
const socket = __importStar(require("./sockets/socket"));
const tablonRoutes_1 = __importDefault(require("./routes/tablonRoutes"));
const registroRoutes_1 = __importDefault(require("./routes/registroRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //configura el puerto definido o 5000
    config() {
        this.app.set('port', process.env.PORT || 5000);
        this.app.use(morgan_1.default('dev')); // muestra los ms de las solicitudes al api
        this.app.use(cors_1.default()); // hace que los servidores de back como de frond funcionen en un mismo proyecto
        this.app.use(express_1.default.json()); //aceptar formatos json... ejemplo req.body
        this.app.use(express_1.default.urlencoded({ extended: false })); //enviar desde un formulario html
    }
    //rutas del servidor
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
        this.app.use('/api/pedido', pedidoRoutes_1.default);
        this.app.use('/api/menu', menuRoutes_1.default);
        this.app.use('/api/auth', authRoutes_1.default);
        this.app.use('/api/culqi', culqiRoutes_1.default);
        this.app.use('/api/tablon', tablonRoutes_1.default);
        this.app.use('/api/registro', registroRoutes_1.default);
    }
    //metodo para iniciar escuchando el puerto configurado y habilitar socket.io
    start() {
        const servidor = this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
        var io = require('socket.io').listen(servidor);
        io.on('connection', (clientes) => {
            console.log(`cliente conectado con idsocket ${clientes.id}`);
            //escuchar desconecciones
            socket.desconectar(clientes);
            //escuchar enviardni
            socket.escuchar_enviardni(clientes, io);
        });
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=index.js.map