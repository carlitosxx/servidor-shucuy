"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.TokenValidation = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token)
        return res.status(401).json('Acceso denegado');
    const payload = jsonwebtoken_1.default.verify(token, 'tokentest');
    req.userId = payload._id;
    //console.log(payload)
    next();
};
//# sourceMappingURL=verifytoken.js.map