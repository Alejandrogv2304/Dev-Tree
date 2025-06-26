import { Request, Response } from "express";
import slug from "slug";
import { validationResult } from "express-validator";
import User from "../models/User";
import { hashPassword } from "../utils/auth";

export const createAccount = async(req: Request,res: Response)=>{
//Manejo de errores de validación

 let errors = validationResult(req)
  if(!errors.isEmpty()){
   res.status(400).json({errors: errors.array()})
   return
  }


  const {email, password } = req.body;
  const userExits = await User.findOne({email});
 

  if(userExits){
    const error = new Error('Este email ya está registrado')
     res.status(409).json({error : error.message})
     return
  }
   
   const handle = slug(req.body.handle, '');
   const handleExits = await User.findOne({handle});
  if(handleExits){
    const error = new Error('Nombre de Usuario No Disponible')
     res.status(409).json({error : error.message})
     return
  }

  const user = new User(req.body);
  user.password = await hashPassword(password);
  user.handle = handle;
  await user.save(req.body);

  res.status(201).send('Registro creado correctamente')
}


export const login = async(req: Request,res: Response)=>{

  //Manejo de errores de validación

 let errors = validationResult(req)
  if(!errors.isEmpty()){
   res.status(400).json({errors: errors.array()})
   return
  }

  //Buscamos si está registrado
  const {email, password } = req.body;
  const user = await User.findOne({email});
 
  if(!user){
    const error = new Error('El usuario no existe')
     res.status(401).json({error : error.message})
     return
  }

  //Comprobamos el password
}