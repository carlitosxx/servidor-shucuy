import { Request, Response } from 'express';
import pool from '../database';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Iuser } from '../models/User';


class AuthController{
    
    //selecciona todos los juegos
    public async list (req:Request, res:Response)  {        
        const pedido = await pool.query('SELECT * FROM games');
        res.json(pedido);

    }
    //profile
    public async profile (req:Request, res:Response) { 
        const user = await pool.query('SELECT dni,user_name,email FROM tbl_colaboradores where dni=?', [req.userId]);
        if(!user) return res.status(404).json('Usuario no encontrado');
        res.json(user[0]);
    }

    // Registrar colaborador
    public async signup (req: Request, res: Response){
        try {
            var user: Iuser = {
                dni: req.body.dni ,
                celu: req.body.celu,
                email:req.body.email,
                pass:bcrypt.hashSync(req.body.pass,8),
                rol:req.body.rol,
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
            const saveUser =await pool.query('INSERT INTO tbl_colaboradores set ?',[user]);
            //token
            const token: string =jwt.sign({_id: req.body.dni},'tokentest')
            res.header('auth-token',token).json(saveUser); 
        } catch (error) { 
            if (error.code==='ER_DUP_ENTRY'){
                res.status(404).json({error:'dato duplicado'});
            }            
        }
          
    }
    // Logear
    public async signin (req: Request, res: Response){   
        const email = req.body.email; 
        const clave = req.body.pass;       
        const consulta = await pool.query('SELECT * FROM tbl_colaboradores where email=?', [email]);
        if (consulta.length >0){            
            const correctPassword: boolean = await bcrypt.compare(clave,consulta[0].pass);
            if(!correctPassword) {
                return res.status(400).json('clave errada')
            }
            else{
                const token:string = jwt.sign({_id: consulta[0].dni},'tokentest')
                res.header('auth-token',token).json({token: token,rol:consulta[0].rol,dni:consulta[0].dni,email:consulta[0].email});                
            }
        }
        else {res.status(404).json({text:'usuario no encontrado'});}
    }

}

export const authController = new AuthController()
export default authController;

