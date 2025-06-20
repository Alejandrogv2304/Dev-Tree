import { Router } from "express";
import User from "./models/User";

const router = Router();

/**Autenticación y registro */

router.post('/auth/register', async(req,res)=>{

    await User.create(req.body);
})

export default router;