import { Router } from "express";
import { body } from "express-validator";
import { createAccount, getUser, login } from "./handlers";
import { handleInputErrors } from './middleware/validation';
import { authenticate } from "./middleware/auth";



const router = Router();

/**Autenticación y registro */

router.post('/auth/register', 
    body('handle').notEmpty().withMessage('El Handle no puede ir vacio'),
    body('name').notEmpty().withMessage('El Name no puede ir vacio'),
    body('email').isEmail().withMessage('El Email no es válido'),
    body('password').isLength({min:8}).withMessage('El Password debe tener mínimo 8 carácteres'),
    handleInputErrors,
    createAccount )

router.post('/auth/login', 
    body('email').isEmail().withMessage('El Email no es válido'),
    body('password').isLength({min:8}).withMessage('El Password es obligatorio'),
    handleInputErrors,
    login )

router.get('/user',authenticate, getUser)

export default router;