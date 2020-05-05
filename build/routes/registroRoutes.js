"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registroController_1 = __importDefault(require("../controllers/registroController"));
class RegistroRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:latitud/:longitud/:dni', registroController_1.default.updateLatLng); // ACTUALIZAR LATI Y LONGI
        this.router.get('/:dni', registroController_1.default.getLatLng); // OBTENER LATI Y LONGI SEGUN DNI         
    }
}
const registroRoutes = new RegistroRoutes();
exports.default = registroRoutes.router;
//# sourceMappingURL=registroRoutes.js.map