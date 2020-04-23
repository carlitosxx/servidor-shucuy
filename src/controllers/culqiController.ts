import { Request, Response } from 'express';
import pool from '../database';
const fetch = require('node-fetch');


var objeto;

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
    
}
export const culqiController = new CulqiController()
export default culqiController;
