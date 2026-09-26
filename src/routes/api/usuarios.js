import express from 'express';
import { readData, writeData } from '../../db/DBUsuario.js';

import {v4} from 'uuid'

export const usuarios = express.Router();

/**
* route GET /v1/api/usuarios
**/
usuarios.get("/", (req, res) => {
    res.json(readData());
});

usuarios.post("/", (req, res) => {
    const datos = readData();
    const body = req.body;
    const nuevoUsuario = {
        "codigo": crypto.randomUUID(),
        ...body,
    }
    datos.push(nuevoUsuario);
    writeData(datos);
    res.json(nuevoUsuario);
});