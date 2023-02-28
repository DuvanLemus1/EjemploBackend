
import Mascota from '../models/Mascota.js';

import Persona from '../models/Persona.js';

const crearMascota = async (req, res) => {
  try {
    const mascota = new Mascota({
      nombre: req.body.nombre,
      edad: req.body.edad,
      idPersona: req.body.idPersona
    });
    const mascotaCreada = await mascota.save();
    res.json(mascotaCreada);
    console.log(mascota);
  } catch (error) {
    console.log(error);
  }
};

const obtenerMascotas = async (req, res) => {
    try {
      const mascotas = await Mascota.findAll({
        //include: Persona
        include: {model:Persona},
          //  atributes:['nombre']
            
        });
        //atributes:['idMascota','nombre','idPersona'];
      res.json(mascotas);
      console.log(mascotas)
    } catch (error) {
      console.log(error);
    }
  };

export {crearMascota, obtenerMascotas};