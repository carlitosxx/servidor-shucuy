import { Request, Response } from 'express';
import pool from '../database';


class MenuController{
    /*Entradas*/
    //seleccion
    public async listentr (req:Request, res:Response)  {        
        const menu = await pool.query('SELECT * FROM tbl_entradas order by id_entr desc');
        res.json(menu);
    }
    //seleccion por ID    
    public async getentr (req:Request, res:Response) { 
        const {id}=req.params;
        const pedido = await pool.query('SELECT * FROM tbl_entradas where id_entr=?', [id]);
        if (pedido.length >0){return res.json(pedido[0])}
        res.status(404).json({text:'esta entrada no existe '});
    }
    //inserta
    public async creaentr (req: Request, res: Response){        
        await pool.query('INSERT INTO tbl_entradas set ?',[req.body]);
        res.json({message: 'entrada guardada'});
    }
    //actualizar segun id
    public async updateentr(req: Request,res:Response){
        const {id}=req.params;
        const consulta = await pool.query('UPDATE tbl_entradas set ? where id_entr=?', [req.body,id]);
        res.json({message: 'bebida actualizado'});
    }
    //Verificar por entrada    
    public async verientr (req:Request, res:Response) { 
        const {titu}=req.params;
        const consulta = await pool.query('SELECT * FROM tbl_entradas where titu=?', [titu]);
        if (consulta.length >0){return res.json(consulta[0])}
        res.status(404).json({text:'esta entrada no existe '});
    }

    /*Bebidas*/
    //seleccion
    public async listbebi (req:Request, res:Response)  {        
        const menu = await pool.query('SELECT * FROM tbl_bebidas order by id_bebi desc');
        res.json(menu);
    }
    //seleccion por ID    
        public async getbebi (req:Request, res:Response) { 
        const {id}=req.params;
        const pedido = await pool.query('SELECT * FROM tbl_bebidas where id_bebi=?', [id]);
        if (pedido.length >0){return res.json(pedido[0])}
        res.status(404).json({text:'esta bebida no existe '});
    }
    //inserta
    public async creabebi (req: Request, res: Response){        
    await pool.query('INSERT INTO tbl_bebidas set ?',[req.body]);
    res.json({message: 'bebida guardada'});
    }
    //actualizar segun id
    public async updatebebi(req: Request,res:Response){
        const {id}=req.params;
        const consulta = await pool.query('UPDATE tbl_bebidas set ? where id_bebi=?', [req.body,id]);
        res.json({message: 'bebida actualizado'});
    } 
    //Verificar por bebida    
    public async veribebi (req:Request, res:Response) { 
        const {titu}=req.params;
        const consulta = await pool.query('SELECT * FROM tbl_bebidas where titu=?', [titu]);
        if (consulta.length >0){return res.json(consulta[0])}
        res.status(404).json({text:'esta bebida no existe '});
    }
    

    /*Fondos*/
    //seleccion
    public async listfond (req:Request, res:Response)  {        
        const menu = await pool.query('SELECT * FROM tbl_fondos order by id_fond desc');
        res.json(menu);
    }
    //seleccion por ID    
    public async getfond (req:Request, res:Response) { 
        const {id}=req.params;
        const pedido = await pool.query('SELECT * FROM tbl_fondos where id_fond=?', [id]);
        if (pedido.length >0){return res.json(pedido[0])}
        res.status(404).json({text:'este fondo no existe '});
    }
    //Inserta 
    public async creafond (req: Request, res: Response){        
        await pool.query('INSERT INTO tbl_fondos set ?',[req.body]);
        res.json({message: 'fondo guardado'});
    } 
    //actualizar segun id
    public async updatefond(req: Request,res:Response){
        const {id}=req.params;
        const consulta = await pool.query('UPDATE tbl_fondos set ? where id_fond=?', [req.body,id]);
        res.json({message: 'fondo actualizado'});
    }  
    //Verificar por fondo    
    public async verifond (req:Request, res:Response) { 
        const {titu}=req.params;
        const consulta = await pool.query('SELECT * FROM tbl_fondos where titu=?', [titu]);
        if (consulta.length >0){return res.json(consulta[0])}
        res.status(404).json({text:'este fondo no existe '});
    }

    /*Menus*/
    //seleccion
    public async listmenu (req:Request, res:Response)  {        
        const menu = await pool.query(`
        SELECT T1.id_menu as ID,T2.titu as Bebida,T2.url_img as URL_1,
        T3.titu as Entrada,T3.url_img as URL_2,T4.titu as Fondo,T4.url_img as URL_3,
        T1.cost as Costo,T1.vent as Venta,T1.fech as Fecha
        FROM tbl_menus T1 
        INNER JOIN tbl_bebidas T2 ON T1.id_bebi=T2.id_bebi 
        INNER JOIN tbl_entradas T3 on T1.id_entr=T3.id_entr
        INNER JOIN tbl_fondos T4 on T1.id_fond=T4.id_fond order by T1.fech desc`);
        res.json(menu);
    }
    //seleccion por fecha    
    public async getmenu (req:Request, res:Response) { 
        const {fecha}=req.params;
        const pedido = await pool.query(`
        SELECT T1.id_menu as ID,T2.titu as Bebida,T2.url_img as URL_1,
        T3.titu as Entrada,T3.url_img as URL_2,T4.titu as Fondo,T4.url_img as URL_3,
        T1.cost as Costo,T1.vent as Venta,T1.fech as Fecha
        FROM tbl_menus T1 
        INNER JOIN tbl_bebidas T2 ON T1.id_bebi=T2.id_bebi 
        INNER JOIN tbl_entradas T3 on T1.id_entr=T3.id_entr
        INNER JOIN tbl_fondos T4 on T1.id_fond=T4.id_fond
        WHERE T1.fech=?`, [fecha]);
        if (pedido.length >0){return res.json(pedido)}
        res.status(404).json({text:'no existe menu esta fecha'});
    }
    //Inserta 
    public async creamenu (req: Request, res: Response){        
        await pool.query('INSERT INTO tbl_menus set ?',[req.body]);
        res.json({message: 'menu guardado'});
    } 
    //actualizar segun id
    public async updatemenu(req: Request,res:Response){
        const {id}=req.params;
        const consulta = await pool.query('UPDATE tbl_menus set ? where id_menu=?', [req.body,id]);
        res.json({message: 'menu actualizado'});
    } 
    //Verificar por bebida    
    public async verimenu (req:Request, res:Response) { 
        const idbebi = req.params.idbebi;
        const identr = req.params.identr;
        const idfond = req.params.idfond;
        const fech = req.params.fech;
        const consulta = await pool.query('SELECT * FROM tbl_menus WHERE id_bebi=? and id_entr=? and id_fond=? and fech=?', [idbebi,identr,idfond,fech]);
        if (consulta.length >0){return res.json(consulta[0])}
        res.status(404).json({text:'este menu no existe '});
    }

}

export const pedidoController = new MenuController()
export default pedidoController;