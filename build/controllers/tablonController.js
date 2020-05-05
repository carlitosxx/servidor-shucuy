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
class TablonController {
    // SELECCIONA TODOS LOS PEDIDOS CONE STADO 1,2,3
    listCocina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tablonCocina = yield database_1.default.query(`select T1.id_cabe, T2.descr, T1.fech ,CONCAT(T5.titu,' + ',T6.titu,' + ',T7.titu) as menu, T3.cantidad
        from 
        tbl_cabpedido as T1 INNER JOIN 
        tbl_estados as T2 on T1.id_esta=T2.id_esta INNER JOIN 
        tbl_detpedido as T3 on T1.id_cabe=T3.id_cabe INNER JOIN
        tbl_menus as T4 on T3.id_menu=T4.id_menu INNER JOIN
        tbl_fondos as T5 on T4.id_fond=T5.id_fond INNER JOIN
        tbl_entradas as T6 on t4.id_entr=T6.id_entr INNER JOIN
        tbl_bebidas as t7 on t4.id_bebi=t7.id_bebi where T1.id_esta=1 or T1.id_esta=2 or T1.id_esta=3`);
            res.json(tablonCocina);
        });
    }
    // LLAMA UN PROCEDIMIENTO ALMACENADO detaesta    
    sp_INS_detaesta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_cabe = req.params.id_cabe;
            const id_esta = req.params.id_esta;
            yield database_1.default.query('CALL sp_INS_detaesta(?,?)', [id_cabe, id_esta]);
            console.log('Insertado');
            return res.json('Insertado y actualizado');
        });
    }
}
exports.tablonController = new TablonController();
exports.default = exports.tablonController;
//# sourceMappingURL=tablonController.js.map