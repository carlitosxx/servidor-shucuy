import { Router } from 'express';
import tablonController from '../controllers/tablonController';

class TablonRoutes {
    
public router: Router = Router();
    constructor() {
        this.config();
    }
    config():void {
        this.router.get('/listcocina',tablonController.listCocina); //consultatodos
        this.router.get('/:id_cabe/:id_esta', tablonController.sp_INS_detaesta); //inserta y actualiza            
    }

}

const tablonRoutes = new TablonRoutes();
export default tablonRoutes.router;