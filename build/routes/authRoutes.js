"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = __importDefault(require("../controllers/authController"));
const verifytoken_1 = require("../libs/verifytoken");
class AuthRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/signup', authController_1.default.signup);
        this.router.post('/signin', authController_1.default.signin);
        //this.router.get('/signing', authController.signin);  
        this.router.get('/profile', verifytoken_1.TokenValidation, authController_1.default.profile);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
//# sourceMappingURL=authRoutes.js.map