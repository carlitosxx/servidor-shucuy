"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidoController_1 = __importDefault(require("../controllers/pedidoController"));
class PedidoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', pedidoController_1.default.list); //consultatodos
        this.router.get('/pedidoestado/:dni', pedidoController_1.default.getpedidoestado); //consultar pedidos segun dni
        this.router.get('/:id_esta/:dni/:mont_pago/:tota', pedidoController_1.default.create); //grabar cabecera
        this.router.post('/detalle', pedidoController_1.default.agregadetalle); //grabar detalle
        this.router.delete('/:id', pedidoController_1.default.detele); //elimina       
        this.router.put('/:id', pedidoController_1.default.update); //actualiza        
    }
}
const pedidoRoutes = new PedidoRoutes();
exports.default = pedidoRoutes.router;
//# sourceMappingURL=pedidoRoutes.js.map