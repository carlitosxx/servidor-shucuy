import { Router } from 'express';
import authController from '../controllers/authController';
import {TokenValidation} from '../libs/verifytoken'
class AuthRoutes {    
public router: Router = Router();
    constructor() {
        this.config();
    }
    config():void {
        this.router.post('/signup', authController.signup); 
        this.router.post('/signin', authController.signin);
        //this.router.get('/signing', authController.signin);  
        this.router.get('/profile',TokenValidation, authController.profile);    
    }

}

const authRoutes = new AuthRoutes();
export default authRoutes.router;