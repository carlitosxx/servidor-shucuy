import { Request, Response } from 'express';
import pool from '../database';


class PedidoController{
    //selecciona todos los juegos
    public async list (req:Request, res:Response)  {        
        const pedido = await pool.query('SELECT * FROM games');
        res.json(pedido);

    }
    //selecciona el juego donde el id sea un parametro
    public async getpedidoestado (req:Request, res:Response) { 
        const {dni}=req.params;
        const pedidoestado = await pool.query('select T1.id_cabe, T2.descr from tbl_cabpedido as T1 INNER JOIN tbl_estados as T2 on T1.id_esta=T2.id_esta where T1.dni=? order by T1.id_cabe desc;', [dni]);
        res.json(pedidoestado);
    }
    //crea un nueva nueva cabecera de pedido
    public async create (req: Request, res: Response){
        const id_esta = req.params.id_esta;
        const dni=req.params.dni;
        const mont_pago=req.params.mont_pago;
        const tota=req.params.tota;
        const id_cabepedi= await pool.query('CALL sp_INS_cabpedido(?,?,?,?)',[id_esta,dni,mont_pago,tota]);      
        console.log(id_cabepedi[0]);
        return res.json(id_cabepedi[0])        
    }
    
    //Agrega detalle
    public async agregadetalle (req: Request, res: Response){        
        await pool.query('INSERT INTO tbl_detpedido set ?',[req.body]);
        res.json({message: 'menu guardado'});
    } 
  
    //Consulta para eliminar un juego
    public async detele(req: Request, res:Response){
        const {id}=req.params;
        const pedido = await pool.query('DELETE FROM games where id=?', [id]);
        res.json({message: 'juego eliminado'});
    }
    //actualizar un juego segun id
    public async update(req: Request,res:Response){
        const {id}=req.params;
        const pedido = await pool.query('UPDATE games set ? where id=?', [req.body,id]);
        res.json({message: 'juego actualizado'});
    }

}

export const pedidoController = new PedidoController()
export default pedidoController;