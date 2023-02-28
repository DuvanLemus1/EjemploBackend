import express from 'express';
import { crearPersona, 
         obtenerPersonas, 
         eliminarPersona, 
         actualizarPersona }
         from '../controllers/controllerPersona.js';

const routerPersonas = express.Router();

routerPersonas.post('/', crearPersona);

routerPersonas.get('/obtenerPersonas', obtenerPersonas);

routerPersonas.delete('/eliminarPersona/:idPersona', eliminarPersona);

routerPersonas.put('/actualizarPersona/:idPersona', actualizarPersona);

export default routerPersonas;
