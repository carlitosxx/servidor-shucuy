import { Request, Response } from 'express';
import pool from '../database';
const fetch = require('node-fetch');


var objeto;
var dni;
class CulqiController{       
    public async Gencargo (req:Request, res:Response)  { 
        objeto=req.body;
        
    let promesa= fetch('https://api.culqi.com/v2/charges', {
    method: 'POST',
    headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer sk_test_htB9Pql7FhLqpEy2'
        },
    body: JSON.stringify(req.body),
    });

    const a = await promesa
    .then((res: { json: () => any; }) => { return res.json()})
    .then((json: any) => json );
   
    return  res.json(a)
    }    
    public async getdni (req:Request, res:Response)  { 
    try {
        dni=req.body.dni;
    console.log(dni);        
    let promesa= fetch(`https://api.reniec.cloud/dni/${dni}`, {
    method: 'GET',
    headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer sk_test_htB9Pql7FhLqpEy2'
        },
    
    });

    const a = await promesa
    .then((res: { json: () => any; }) => { return res.json()})
    .then((json: any) => json );
   
    return  res.json(a)
    } catch (error) {
        console.log(error.message);
    }
    }    
    
}
export const culqiController = new CulqiController()
export default culqiController;
