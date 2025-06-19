import express from 'express';//ESM 
import 'dotenv/config'
import router from './router';
import { connectDB } from './db/config';

const app= express();

connectDB();

//Habilitar leer datos
app.use(express.json())


//URL principal
app.use('/', router);



export default app;