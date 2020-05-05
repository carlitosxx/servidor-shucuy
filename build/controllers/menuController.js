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
class MenuController {
    /*Entradas*/
    //seleccion
    listentr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const menu = yield database_1.default.query('SELECT * FROM tbl_entradas order by id_entr desc');
            res.json(menu);
        });
    }
    //seleccion por ID    
    getentr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pedido = yield database_1.default.query('SELECT * FROM tbl_entradas where id_entr=?', [id]);
            if (pedido.length > 0) {
                return res.json(pedido[0]);
            }
            res.status(404).json({ text: 'esta entrada no existe ' });
        });
    }
    //inserta
    creaentr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tbl_entradas set ?', [req.body]);
            res.json({ message: 'entrada guardada' });
        });
    }
    //actualizar segun id
    updateentr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const consulta = yield database_1.default.query('UPDATE tbl_entradas set ? where id_entr=?', [req.body, id]);
            res.json({ message: 'bebida actualizado' });
        });
    }
    //Verificar por entrada    
    verientr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titu } = req.params;
            const consulta = yield database_1.default.query('SELECT * FROM tbl_entradas where titu=?', [titu]);
            if (consulta.length > 0) {
                return res.json(consulta[0]);
            }
            res.status(404).json({ text: 'esta entrada no existe ' });
        });
    }
    /*Bebidas*/
    //seleccion
    listbebi(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const menu = yield database_1.default.query('SELECT * FROM tbl_bebidas order by id_bebi desc');
            res.json(menu);
        });
    }
    //seleccion por ID    
    getbebi(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pedido = yield database_1.default.query('SELECT * FROM tbl_bebidas where id_bebi=?', [id]);
            if (pedido.length > 0) {
                return res.json(pedido[0]);
            }
            res.status(404).json({ text: 'esta bebida no existe ' });
        });
    }
    //inserta
    creabebi(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tbl_bebidas set ?', [req.body]);
            res.json({ message: 'bebida guardada' });
        });
    }
    //actualizar segun id
    updatebebi(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const consulta = yield database_1.default.query('UPDATE tbl_bebidas set ? where id_bebi=?', [req.body, id]);
            res.json({ message: 'bebida actualizado' });
        });
    }
    //Verificar por bebida    
    veribebi(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titu } = req.params;
            const consulta = yield database_1.default.query('SELECT * FROM tbl_bebidas where titu=?', [titu]);
            if (consulta.length > 0) {
                return res.json(consulta[0]);
            }
            res.status(404).json({ text: 'esta bebida no existe ' });
        });
    }
    /*Fondos*/
    //seleccion
    listfond(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const menu = yield database_1.default.query('SELECT * FROM tbl_fondos order by id_fond desc');
            res.json(menu);
        });
    }
    //seleccion por ID    
    getfond(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pedido = yield database_1.default.query('SELECT * FROM tbl_fondos where id_fond=?', [id]);
            if (pedido.length > 0) {
                return res.json(pedido[0]);
            }
            res.status(404).json({ text: 'este fondo no existe ' });
        });
    }
    //Inserta 
    creafond(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tbl_fondos set ?', [req.body]);
            res.json({ message: 'fondo guardado' });
        });
    }
    //actualizar segun id
    updatefond(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const consulta = yield database_1.default.query('UPDATE tbl_fondos set ? where id_fond=?', [req.body, id]);
            res.json({ message: 'fondo actualizado' });
        });
    }
    //Verificar por fondo    
    verifond(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titu } = req.params;
            const consulta = yield database_1.default.query('SELECT * FROM tbl_fondos where titu=?', [titu]);
            if (consulta.length > 0) {
                return res.json(consulta[0]);
            }
            res.status(404).json({ text: 'este fondo no existe ' });
        });
    }
    /*Menus*/
    //seleccion
    listmenu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const menu = yield database_1.default.query(`
        SELECT T1.id_menu as ID,T2.titu as Bebida,T2.url_img as URL_1,
        T3.titu as Entrada,T3.url_img as URL_2,T4.titu as Fondo,T4.url_img as URL_3,
        T1.cost as Costo,T1.vent as Venta,T1.fech as Fecha
        FROM tbl_menus T1 
        INNER JOIN tbl_bebidas T2 ON T1.id_bebi=T2.id_bebi 
        INNER JOIN tbl_entradas T3 on T1.id_entr=T3.id_entr
        INNER JOIN tbl_fondos T4 on T1.id_fond=T4.id_fond order by T1.fech desc`);
            res.json(menu);
        });
    }
    //seleccion por fecha    
    getmenu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fecha } = req.params;
            const pedido = yield database_1.default.query(`
        SELECT T1.id_menu as ID,T2.titu as Bebida,T2.url_img as URL_1,
        T3.titu as Entrada,T3.url_img as URL_2,T4.titu as Fondo,T4.url_img as URL_3,
        T1.cost as Costo,T1.vent as Venta,T1.fech as Fecha
        FROM tbl_menus T1 
        INNER JOIN tbl_bebidas T2 ON T1.id_bebi=T2.id_bebi 
        INNER JOIN tbl_entradas T3 on T1.id_entr=T3.id_entr
        INNER JOIN tbl_fondos T4 on T1.id_fond=T4.id_fond
        WHERE T1.fech=?`, [fecha]);
            if (pedido.length > 0) {
                return res.json(pedido);
            }
            res.status(404).json({ text: 'no existe menu esta fecha' });
        });
    }
    //Inserta 
    creamenu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tbl_menus set ?', [req.body]);
            res.json({ message: 'menu guardado' });
        });
    }
    //actualizar segun id
    updatemenu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const consulta = yield database_1.default.query('UPDATE tbl_menus set ? where id_menu=?', [req.body, id]);
            res.json({ message: 'menu actualizado' });
        });
    }
    //Verificar por bebida    
    verimenu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idbebi = req.params.idbebi;
            const identr = req.params.identr;
            const idfond = req.params.idfond;
            const fech = req.params.fech;
            const consulta = yield database_1.default.query('SELECT * FROM tbl_menus WHERE id_bebi=? and id_entr=? and id_fond=? and fech=?', [idbebi, identr, idfond, fech]);
            if (consulta.length > 0) {
                return res.json(consulta[0]);
            }
            res.status(404).json({ text: 'este menu no existe ' });
        });
    }
}
exports.pedidoController = new MenuController();
exports.default = exports.pedidoController;
//# sourceMappingURL=menuController.js.map