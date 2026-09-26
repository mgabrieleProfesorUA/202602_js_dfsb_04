import express from 'express';
import { readData } from '../../db/DBDistrito.js';

export const distritos = express.Router();

/**
* route GET /v1/api/distritos
**/
distritos.get("/", (req, res) => {
    const { codDepartamento, codProvincia } = req.query; // Accessing query parameters
    if (codDepartamento && codProvincia) {
        const datos = readData();
        const distrito = datos.filter((distrito) => distrito.codDepartamento == codDepartamento && distrito.codProvincia == codProvincia);
        res.json(distrito);
    } else {
        res.send('No existe distritos para el departamento y provincia seleccionado');
    }
});