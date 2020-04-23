import { Router } from 'express';
import culqiController from '../controllers/culqiController';
import {TokenValidation} from '../libs/verifytoken'

class CulqiRoutes {
  
public router: Router = Router();
    constructor() {
        this.config();
    }
    config():void {
        this.router.post('/cargo', culqiController.Gencargo);          
    }

}

const culqiRoutes = new CulqiRoutes();
export default culqiRoutes.router;