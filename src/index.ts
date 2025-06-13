import express from 'express';//ESM 
const app= express();


//Routing

app.get('/', (req,res)=>{
    res.send("Hola Mundo en Express")
})

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log("Server Corriendo en el puerto:", port)
})