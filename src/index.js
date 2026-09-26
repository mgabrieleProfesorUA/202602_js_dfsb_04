import express from 'express';
import { tipodocumentos } from './routes/api/tipodocumentos.js';
import { departamentos } from './routes/api/departamentos.js';
import { provincias } from './routes/api/provincias.js';
import { distritos } from './routes/api/distritos.js';
import { usuarios } from './routes/api/usuarios.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use("/v1/api/tipodocumentos", tipodocumentos);
app.use("/v1/api/departamentos", departamentos);
app.use("/v1/api/provincias", provincias);
app.use("/v1/api/distritos", distritos);
app.use("/v1/api/usuarios", usuarios);
app.listen(3000, () => console.log("Servidor Disponible en el puerto 3000 para las peticiones"));