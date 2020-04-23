import { Request, Response } from 'express';
import pool from '../database';


class GamesController{
    //selecciona todos los juegos
    public async list (req:Request, res:Response)  {        
        const games = await pool.query('SELECT * FROM games');
        res.json(games);

    }
    //selecciona el juego donde el id sea un parametro
    public async getone (req:Request, res:Response) { 
        const {id}=req.params;
        const games = await pool.query('SELECT * FROM games where id=?', [id]);
       if (games.length >0){
           return res.json(games[0])
       }
        res.status(404).json({text:'este juego no existe '});

    }
    //crea un nuevo juego
    public async create (req: Request, res: Response){
        
        await pool.query('INSERT INTO games set ?',[req.body]);
        res.json({message: 'juego guardado'});
    }
    //Consulta para eliminar un juego
    public async detele(req: Request, res:Response){
        const {id}=req.params;
        const games = await pool.query('DELETE FROM games where id=?', [id]);
        res.json({message: 'juego eliminado'});
    }
    //actualizar un juego segun id
    public async update(req: Request,res:Response){
        const {id}=req.params;
        const games = await pool.query('UPDATE games set ? where id=?', [req.body,id]);
        res.json({message: 'juego actualizado'});
    }

}

export const gamesController = new GamesController()
export default gamesController;