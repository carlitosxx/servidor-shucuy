"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tablonController_1 = __importDefault(require("../controllers/tablonController"));
class TablonRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/listcocina', tablonController_1.default.listCocina); //consultatodos
        this.router.get('/:id_cabe/:id_esta', tablonController_1.default.sp_INS_detaesta); //inserta y actualiza            
    }
}
const tablonRoutes = new TablonRoutes();
exports.default = tablonRoutes.router;
//# sourceMappingURL=tablonRoutes.js.map