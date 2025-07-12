import express from 'express';//ESM 
import 'dotenv/config'
import cors from 'cors'
import router from './router';
import { connectDB } from './config/db';
import { corsConfig } from './config/cors';

connectDB();
const app= express();

//Cors
app.use(cors(corsConfig))

//Habilitar leer datos
app.use(express.json())


//URL principal
app.use('/', router);



export default app;