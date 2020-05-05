"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const culqiController_1 = __importDefault(require("../controllers/culqiController"));
class CulqiRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/cargo', culqiController_1.default.Gencargo);
        this.router.post('/dni', culqiController_1.default.getdni);
    }
}
const culqiRoutes = new CulqiRoutes();
exports.default = culqiRoutes.router;
//# sourceMappingURL=culqiRoutes.js.map