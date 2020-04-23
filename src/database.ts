import mysql from 'promise-mysql';
import keys from './keys';

//crea coneccion
const pool = mysql.createPool(keys.database);

pool.getConnection() //empezar a enviar consultas
.then((connection: any) => {
    pool.releaseConnection(connection);//iniciar una coneccion
    console.log('DB is connected');//muestra mensaje por consola
});

    export default pool;