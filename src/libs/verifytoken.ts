import { Request,Response,NextFunction, request } from 'express';
import jwt from 'jsonwebtoken';


interface IPayload{
    _id:string;
    iat:number;
}
export const TokenValidation=(req:Request, res:Response, next:NextFunction) =>{
    
    const token = req.header('auth-token');
    if (!token) return res.status(401).json('Acceso denegado');
    const payload= jwt.verify(token,'tokentest') as IPayload;
    req.userId=payload._id;
    //console.log(payload)
    next();
}