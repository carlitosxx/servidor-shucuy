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
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = require('node-fetch');
var objeto;
var dni;
class CulqiController {
    Gencargo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            objeto = req.body;
            let promesa = fetch('https://api.culqi.com/v2/charges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer sk_test_htB9Pql7FhLqpEy2'
                },
                body: JSON.stringify(req.body),
            });
            const a = yield promesa
                .then((res) => { return res.json(); })
                .then((json) => json);
            return res.json(a);
        });
    }
    getdni(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                dni = req.body.dni;
                console.log(dni);
                let promesa = fetch(`https://api.reniec.cloud/dni/${dni}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': 'Bearer sk_test_htB9Pql7FhLqpEy2'
                    },
                });
                const a = yield promesa
                    .then((res) => { return res.json(); })
                    .then((json) => json);
                return res.json(a);
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
}
exports.culqiController = new CulqiController();
exports.default = exports.culqiController;
//# sourceMappingURL=culqiController.js.map