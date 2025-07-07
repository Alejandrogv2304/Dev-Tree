import bcrypt from "bcrypt";

export const hashPassword = async(password: string) =>{
    //Rondas, cantidad de veces que se aplica el Salt
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

export const checkPassword = async(enteredPassword: string, hash:string) =>{
    
    return await bcrypt.compare(enteredPassword, hash)
    
}