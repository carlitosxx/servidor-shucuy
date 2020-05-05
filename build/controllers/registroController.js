"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class RegistroController {
    // LLAMA UN PROCEDIMIENTO ALMACENADO detaesta    
    updateLatLng(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const latitud = req.params.latitud;
            const longitud = req.params.longitud;
            const dni = req.params.dni;
            yield database_1.default.query('CALL sp_UPD_colaboradores(?,?,?)', [latitud, longitud, dni]);
            // console.log('Actualizado');
            return res.json('Actualizado');
        });
    }
    // SELECCION DE LATI Y LONGI
    getLatLng(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dni } = req.params;
            const games = yield database_1.default.query('select lati,longi from tbl_colaboradores where dni=?', [dni]);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: 'este juego no existe ' });
        });
    }
}
exports.registroController = new RegistroController();
exports.default = exports.registroController;
//# sourceMappingURL=registroController.js.map