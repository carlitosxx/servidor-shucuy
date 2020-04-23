import { Router } from 'express';
import gamesController from '../controllers/gamesController';

class GamesRoutes {
    
public router: Router = Router();
    constructor() {
        this.config();
    }
    config():void {
        this.router.get('/',gamesController.list); //consultatodos
        this.router.get('/:id',gamesController.getone); //consulta segun id
        this.router.post('/', gamesController.create); //crea
        this.router.delete('/:id',gamesController.detele); //elimina       
        this.router.put('/:id',gamesController.update) //actualiza
    }

}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;