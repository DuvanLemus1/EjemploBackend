import express from 'express';
import { crearMascota,
         obtenerMascotas,
         eliminarMascota,
         actualizarMascota 
          }
         from '../controllers/controllerMascota.js';

const routerMascotas = express.Router();

routerMascotas.post('/crearMascota', crearMascota);

routerMascotas.get('/obtenerMascotas', obtenerMascotas);

routerMascotas.delete('/eliminarMascota/:idMascota', eliminarMascota);

routerMascotas.put('/actualizarMascota/:idMascota', actualizarMascota);
/*
routerPersonas.delete('/eliminarPersona/:idPersona', eliminarPersona);

routerPersonas.put('/actualizarPersona/:idPersona', actualizarPersona);
*/

export default routerMascotas;