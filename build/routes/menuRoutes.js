"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ROUTES MENU: esto lo que hace es generar las rutas
const express_1 = require("express");
const menuController_1 = __importDefault(require("../controllers/menuController"));
class MenuRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //entradas
        this.router.get('/entradas/', menuController_1.default.listentr); //consulta todos las entradas
        this.router.get('/entradas/:id', menuController_1.default.getentr); //consulta entrada segun id
        this.router.post('/entradas', menuController_1.default.creaentr); //crea entrada
        this.router.put('/entradas/:id', menuController_1.default.updateentr); //actualiza entrada
        this.router.get('/entradas/veri/:titu', menuController_1.default.verientr); //verificar bebidas existentes
        //bebidas
        this.router.get('/bebidas/', menuController_1.default.listbebi); //consulta todos las bebidas
        this.router.get('/bebidas/:id', menuController_1.default.getbebi); //consulta bebida segun id
        this.router.post('/bebidas', menuController_1.default.creabebi); //crea bebidas       
        this.router.put('/bebidas/:id', menuController_1.default.updatebebi); //actualiza bebidas
        this.router.get('/bebidas/veri/:titu', menuController_1.default.veribebi); //verificar bebidas existentes
        //fondos              
        this.router.get('/fondos/', menuController_1.default.listfond); //consulta todos las fondos
        this.router.get('/fondos/:id', menuController_1.default.getfond); //consulta fondo segun id
        this.router.post('/fondos', menuController_1.default.creafond); //crea fondo       
        this.router.put('/fondos/:id', menuController_1.default.updatefond); //actualiza fondo 
        this.router.get('/fondos/veri/:titu', menuController_1.default.verifond); //verificar bebidas existentes
        //Menu
        this.router.get('/menus/', menuController_1.default.listmenu); //consulta todos las menus
        this.router.get('/menus/:fecha', menuController_1.default.getmenu); //consulta menu segun fecha
        this.router.post('/menus/', menuController_1.default.creamenu); //crea menu       
        this.router.put('/menus/:id', menuController_1.default.updatemenu); //actualiza menu 
        this.router.get('/menus/veri/:idbebi/:identr/:idfond/:fech', menuController_1.default.verimenu); //verificar bebidas existentes    
    }
}
const menuRoutes = new MenuRoutes();
exports.default = menuRoutes.router;
//# sourceMappingURL=menuRoutes.js.map