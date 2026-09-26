import express from 'express';
import { tipodocumentos } from './routes/api/tipodocumentos.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use("/v1/api/tipodocumentos", tipodocumentos);
app.listen(3000, () => console.log("Servidor Disponible en el puerto 3000 para las peticiones"));