import { Router } from 'express';
import registroController from '../controllers/registroController';

class RegistroRoutes {
    
public router: Router = Router();
    constructor() {
        this.config();
    }
    config():void {
        this.router.get('/:latitud/:longitud/:dni', registroController.updateLatLng); // ACTUALIZAR LATI Y LONGI
        this.router.get('/:dni',registroController.getLatLng); // OBTENER LATI Y LONGI SEGUN DNI         
    }
}

const registroRoutes = new RegistroRoutes();
export default registroRoutes.router;