import { Router } from 'express';
import pedidoController from '../controllers/pedidoController';

class PedidoRoutes {
    
public router: Router = Router();
    constructor() {
        this.config();
    }
    config():void {
        this.router.get('/',pedidoController.list); //consultatodos
        this.router.get('/pedidoestado/:dni',pedidoController.getpedidoestado); //consultar pedidos segun dni
        this.router.get('/:id_esta/:dni/:mont_pago/:tota', pedidoController.create); //grabar cabecera
        this.router.post('/detalle',pedidoController.agregadetalle);//grabar detalle
        this.router.delete('/:id',pedidoController.detele); //elimina       
        this.router.put('/:id',pedidoController.update) //actualiza        
    }

}

const pedidoRoutes = new PedidoRoutes();
export default pedidoRoutes.router;