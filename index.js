import express from 'express';
import dotenv from 'dotenv';
import rotaagendar from './routes/rotaagendar.js';

dotenv.config();

const porta = 3000;
const host = '0.0.0.0';
const app = express();
app.use(express.json());

app.use('/agendar', rotaagendar);
app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});