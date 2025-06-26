import { Router } from "express";
import { body } from "express-validator";
import { createAccount, login } from "./handlers";



const router = Router();

/**Autenticación y registro */

router.post('/auth/register', 
    body('handle').notEmpty().withMessage('El Handle no puede ir vacio'),
    body('name').notEmpty().withMessage('El Name no puede ir vacio'),
    body('email').isEmail().withMessage('El Email no es válido'),
    body('password').isLength({min:8}).withMessage('El Password debe tener mínimo 8 carácteres'),
    createAccount )

router.post('/auth/login', 
    body('email').isEmail().withMessage('El Email no es válido'),
    body('password').isLength({min:8}).withMessage('El Password es obligatorio'),
    login )

export default router;