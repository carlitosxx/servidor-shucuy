import { Request, Response } from 'express';
import pool from '../database';


class RegistroController{
  
    // LLAMA UN PROCEDIMIENTO ALMACENADO detaesta    
    public async updateLatLng (req: Request, res: Response){
        
        const latitud = req.params.latitud;
        const longitud = req.params.longitud;
        const dni = req.params.dni;      
        await pool.query('CALL sp_UPD_colaboradores(?,?,?)',[latitud,longitud,dni]);      
        // console.log('Actualizado');
        return res.json('Actualizado')        
    }   

    // SELECCION DE LATI Y LONGI
    public async getLatLng (req:Request, res:Response) { 
        const {dni}=req.params;
        const games = await pool.query('select lati,longi from tbl_colaboradores where dni=?', [dni]);
       if (games.length >0){
           return res.json(games[0])
       }
        res.status(404).json({text:'este juego no existe '});

    }
}

export const registroController = new RegistroController()
export default registroController;