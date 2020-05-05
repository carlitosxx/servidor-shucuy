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
class GamesController {
    //selecciona todos los juegos
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM games');
            res.json(games);
        });
    }
    //selecciona el juego donde el id sea un parametro
    getone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM games where id=?', [id]);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: 'este juego no existe ' });
        });
    }
    //crea un nuevo juego
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO games set ?', [req.body]);
            res.json({ message: 'juego guardado' });
        });
    }
    //Consulta para eliminar un juego
    detele(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('DELETE FROM games where id=?', [id]);
            res.json({ message: 'juego eliminado' });
        });
    }
    //actualizar un juego segun id
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('UPDATE games set ? where id=?', [req.body, id]);
            res.json({ message: 'juego actualizado' });
        });
    }
}
exports.gamesController = new GamesController();
exports.default = exports.gamesController;
//# sourceMappingURL=gamesController.js.map