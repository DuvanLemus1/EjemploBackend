import express from 'express';
import { crearMascota,
         obtenerMascotas 
          }
         from '../controllers/controllerMascota.js';

const routerMascotas = express.Router();

routerMascotas.post('/crearMascota', crearMascota);

routerMascotas.get('/obtenerMascotas', obtenerMascotas);
/*
routerPersonas.delete('/eliminarPersona/:idPersona', eliminarPersona);

routerPersonas.put('/actualizarPersona/:idPersona', actualizarPersona);
*/

export default routerMascotas;