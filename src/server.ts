import express from 'express';//ESM 
import router from './router';
const app= express();

//Habilitar leer datos
app.use(express.json())


//URL principal
app.use('/', router);



export default app;