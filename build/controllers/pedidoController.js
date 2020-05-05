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
class PedidoController {
    //selecciona todos los juegos
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pedido = yield database_1.default.query('SELECT * FROM games');
            res.json(pedido);
        });
    }
    //selecciona el juego donde el id sea un parametro
    getpedidoestado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dni } = req.params;
            const pedidoestado = yield database_1.default.query('select T1.id_cabe, T2.descr from tbl_cabpedido as T1 INNER JOIN tbl_estados as T2 on T1.id_esta=T2.id_esta where T1.dni=? order by T1.id_cabe desc;', [dni]);
            res.json(pedidoestado);
        });
    }
    //crea un nueva nueva cabecera de pedido
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_esta = req.params.id_esta;
            const dni = req.params.dni;
            const mont_pago = req.params.mont_pago;
            const tota = req.params.tota;
            const id_cabepedi = yield database_1.default.query('CALL sp_INS_cabpedido(?,?,?,?)', [id_esta, dni, mont_pago, tota]);
            console.log(id_cabepedi[0]);
            return res.json(id_cabepedi[0]);
        });
    }
    //Agrega detalle
    agregadetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tbl_detpedido set ?', [req.body]);
            res.json({ message: 'menu guardado' });
        });
    }
    //Consulta para eliminar un juego
    detele(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pedido = yield database_1.default.query('DELETE FROM games where id=?', [id]);
            res.json({ message: 'juego eliminado' });
        });
    }
    //actualizar un juego segun id
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pedido = yield database_1.default.query('UPDATE games set ? where id=?', [req.body, id]);
            res.json({ message: 'juego actualizado' });
        });
    }
}
exports.pedidoController = new PedidoController();
exports.default = exports.pedidoController;
//# sourceMappingURL=pedidoController.js.map