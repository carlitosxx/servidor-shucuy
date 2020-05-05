import { Request, Response } from 'express';
import pool from '../database';


class TablonController{
    // SELECCIONA TODOS LOS PEDIDOS CONE STADO 1,2,3
    public async listCocina (req:Request, res:Response)  {        
        const tablonCocina = await pool.query(`select T1.id_cabe, T2.descr, T1.fech ,CONCAT(T5.titu,' + ',T6.titu,' + ',T7.titu) as menu, T3.cantidad
        from 
        tbl_cabpedido as T1 INNER JOIN 
        tbl_estados as T2 on T1.id_esta=T2.id_esta INNER JOIN 
        tbl_detpedido as T3 on T1.id_cabe=T3.id_cabe INNER JOIN
        tbl_menus as T4 on T3.id_menu=T4.id_menu INNER JOIN
        tbl_fondos as T5 on T4.id_fond=T5.id_fond INNER JOIN
        tbl_entradas as T6 on t4.id_entr=T6.id_entr INNER JOIN
        tbl_bebidas as t7 on t4.id_bebi=t7.id_bebi where T1.id_esta=1 or T1.id_esta=2 or T1.id_esta=3`);
        res.json(tablonCocina);
    }
    
    // LLAMA UN PROCEDIMIENTO ALMACENADO detaesta    
    public async sp_INS_detaesta (req: Request, res: Response){
        const id_cabe = req.params.id_cabe;
        const id_esta=req.params.id_esta;       
        await pool.query('CALL sp_INS_detaesta(?,?)',[id_cabe,id_esta]);      
        console.log('Insertado');
        return res.json('Insertado y actualizado')        
    }   
}

export const tablonController = new TablonController()
export default tablonController;