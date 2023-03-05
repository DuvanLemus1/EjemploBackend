
import Mascota from '../models/Mascota.js';  

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

  const eliminarMascota = async (req, res) => {
    const { idMascota } = req.params;
    
    try {
      const mascotaEliminada = await Mascota.destroy({
        where: {
          idMascota: idMascota
        }
      });
  
      if (mascotaEliminada) {
        res.json({
          mensaje: `La mascota con el id ${idMascota} ha sido eliminada exitosamente`
        });
      } else {
        res.status(404).json({
          mensaje: `La mascota con el id ${idMascota} no fue encontrada`
        });
      }
  
    } catch (error) {
      console.log(error);
      res.status(500).json({
        mensaje: "Hubo un error al intentar eliminar la mascota"
      })
    }
  }

  const actualizarMascota = async (req, res) => {
    const { idMascota } = req.params;
    const { nombre, edad , } = req.body;
  
    try {
      const mascotaActualizada = await Mascota.update({
        nombre,
        edad
        
      }, {
        where: {
          idMascota: idMascota
        }
      });
  
      if (mascotaActualizada[0]) {
        res.json({
          mensaje: `La mascota con el id ${idMascota} ha sido actualizada exitosamente`
        });
      } else {
        res.status(404).json({
          mensaje: `La mascota con el id ${idMascota} no fue encontrada`
        });
      }
  
    } catch (error) {
      console.log(error);
      res.status(500).json({
        mensaje: "Hubo un error al intentar actualizar la Mascota"
      })
    }
  }

export {crearMascota, obtenerMascotas, actualizarMascota, eliminarMascota};