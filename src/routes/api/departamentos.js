import express from 'express';
import { readData } from '../../db/DBDepartamento.js';

export const departamentos = express.Router();

/**
* route GET /v1/api/departamentos
**/
departamentos.get("/", (req, res) => {
    res.json(readData());
});