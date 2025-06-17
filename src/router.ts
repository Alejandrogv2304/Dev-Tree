import { Router } from "express";

const router = Router();

/**Autenticación y registro */

router.post('/auth/register', (req,res)=>{
    console.log("Desde Register")
})

export default router;