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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class AuthController {
    //selecciona todos los juegos
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pedido = yield database_1.default.query('SELECT * FROM games');
            res.json(pedido);
        });
    }
    //profile
    profile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.default.query('SELECT dni,user_name,email FROM tbl_colaboradores where dni=?', [req.userId]);
            if (!user)
                return res.status(404).json('Usuario no encontrado');
            res.json(user[0]);
        });
    }
    // Registrar colaborador
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var user = {
                    dni: req.body.dni,
                    celu: req.body.celu,
                    email: req.body.email,
                    pass: bcryptjs_1.default.hashSync(req.body.pass, 8),
                    rol: req.body.rol,
                    lati: req.body.lati,
                    longi: req.body.longi,
                    nomb: req.body.nomb,
                    appa: req.body.appa,
                    apma: req.body.apma,
                    estado: req.body.estado,
                    conf: req.body.conf,
                    envi: req.body.envi,
                    codi: req.body.codi,
                    dire: req.body.dire
                };
                const saveUser = yield database_1.default.query('INSERT INTO tbl_colaboradores set ?', [user]);
                //token
                const token = jsonwebtoken_1.default.sign({ _id: req.body.dni }, 'tokentest');
                res.header('auth-token', token).json(saveUser);
            }
            catch (error) {
                if (error.code === 'ER_DUP_ENTRY') {
                    res.status(404).json({ error: 'dato duplicado' });
                }
            }
        });
    }
    // Logear
    signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.body.email;
            const clave = req.body.pass;
            const consulta = yield database_1.default.query('SELECT * FROM tbl_colaboradores where email=?', [email]);
            if (consulta.length > 0) {
                const correctPassword = yield bcryptjs_1.default.compare(clave, consulta[0].pass);
                if (!correctPassword) {
                    return res.status(400).json('clave errada');
                }
                else {
                    const token = jsonwebtoken_1.default.sign({ _id: consulta[0].dni }, 'tokentest');
                    res.header('auth-token', token).json({ token: token, rol: consulta[0].rol, dni: consulta[0].dni, email: consulta[0].email });
                }
            }
            else {
                res.status(404).json({ text: 'usuario no encontrado' });
            }
        });
    }
}
exports.authController = new AuthController();
exports.default = exports.authController;
//# sourceMappingURL=authController.js.map