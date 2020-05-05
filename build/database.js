"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
//crea coneccion
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.getConnection() //empezar a enviar consultas
    .then((connection) => {
    pool.releaseConnection(connection); //iniciar una coneccion
    console.log('DB is connected'); //muestra mensaje por consola
});
exports.default = pool;
//# sourceMappingURL=database.js.map