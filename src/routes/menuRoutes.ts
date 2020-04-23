// ROUTES MENU: esto lo que hace es generar las rutas
import { Router } from 'express';
import menuController from '../controllers/menuController';

class MenuRoutes {
    
public router: Router = Router();
    constructor() {
        this.config();
    }
    config():void {
        //entradas
        this.router.get('/entradas/',menuController.listentr); //consulta todos las entradas
        this.router.get('/entradas/:id',menuController.getentr); //consulta entrada segun id
        this.router.post('/entradas', menuController.creaentr); //crea entrada
        this.router.put('/entradas/:id',menuController.updateentr) //actualiza entrada
        this.router.get('/entradas/veri/:titu',menuController.verientr) //verificar bebidas existentes
        //bebidas
        this.router.get('/bebidas/',menuController.listbebi); //consulta todos las bebidas
        this.router.get('/bebidas/:id',menuController.getbebi); //consulta bebida segun id
        this.router.post('/bebidas', menuController.creabebi); //crea bebidas       
        this.router.put('/bebidas/:id',menuController.updatebebi) //actualiza bebidas
        this.router.get('/bebidas/veri/:titu',menuController.veribebi) //verificar bebidas existentes
        //fondos              
        this.router.get('/fondos/',menuController.listfond); //consulta todos las fondos
        this.router.get('/fondos/:id',menuController.getfond); //consulta fondo segun id
        this.router.post('/fondos', menuController.creafond); //crea fondo       
        this.router.put('/fondos/:id',menuController.updatefond) //actualiza fondo 
        this.router.get('/fondos/veri/:titu',menuController.verifond) //verificar bebidas existentes
        //Menu
        this.router.get('/menus/',menuController.listmenu); //consulta todos las menus
        this.router.get('/menus/:fecha',menuController.getmenu); //consulta menu segun fecha
        this.router.post('/menus/', menuController.creamenu); //crea menu       
        this.router.put('/menus/:id',menuController.updatemenu) //actualiza menu 
        this.router.get('/menus/veri/:idbebi/:identr/:idfond/:fech',menuController.verimenu) //verificar bebidas existentes    
    }

}

const menuRoutes = new MenuRoutes();
export default menuRoutes.router;