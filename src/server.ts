import 'reflect-metadata';
import express from 'express';
import routes from './routes/index';
import './database';
import cors from 'cors';
import upload from './config/upload';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files',express.static(upload.directory));

app.use(routes);



app.listen(3333,()=>{
    console.log('🚀 Servidor iniciado');
});