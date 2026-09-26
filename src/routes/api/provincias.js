import express from 'express';
import { readData } from '../../db/DBProvincia.js';

export const provincias = express.Router();

/**
* route GET /v1/api/provincias
**/
provincias.get("/", (req, res) => {
    const { codDepartamento } = req.query; // Accessing query parameters
    if (codDepartamento) {
        const datos = readData();
        const provincia = datos.filter((provincia) => provincia.codDepartamento == codDepartamento);
        res.json(provincia);
    } else {
        res.send('No existe provincias para el departamento seleccionado');
    }
    //res.json(readData());
});