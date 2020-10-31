import dotenv from "dotenv";
import 'reflect-metadata';
import express from 'express';
import routes from './routes/index';
import './database';
import cors from 'cors';
import upload from './config/upload';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files',express.static(upload.directory));

app.use(routes);



app.listen(process.env.PORT ||3333,()=>{
    console.log('🚀 Servidor iniciado');
});