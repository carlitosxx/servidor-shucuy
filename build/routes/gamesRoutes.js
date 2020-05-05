"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesController_1.default.list); //consultatodos
        this.router.get('/:id', gamesController_1.default.getone); //consulta segun id
        this.router.post('/', gamesController_1.default.create); //crea
        this.router.delete('/:id', gamesController_1.default.detele); //elimina       
        this.router.put('/:id', gamesController_1.default.update); //actualiza
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
//# sourceMappingURL=gamesRoutes.js.map