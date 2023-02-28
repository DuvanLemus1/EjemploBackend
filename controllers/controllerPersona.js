import Persona from '../models/Persona.js';

const crearPersona = async (req, res) => {
  try {
    const persona = new Persona(req.body);
    const personaCreada = await persona.save();
    res.json(personaCreada);
    console.log(persona);
  } catch (error) {
    console.log(error);
  }
};

const obtenerPersonas = async (req, res) => {
  try {
    const personas = await Persona.findAll();
    res.json(personas);
  } catch (error) {
    console.log(error);
  }
};


const eliminarPersona = async (req, res) => {
  const { idPersona } = req.params;
  
  try {
    const personaEliminada = await Persona.destroy({
      where: {
        idPersona: idPersona
      }
    });

    if (personaEliminada) {
      res.json({
        mensaje: `La persona con el id ${idPersona} ha sido eliminada exitosamente`
      });
    } else {
      res.status(404).json({
        mensaje: `La persona con el id ${idPersona} no fue encontrada`
      });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Hubo un error al intentar eliminar la persona"
    })
  }
}

const actualizarPersona = async (req, res) => {
  const { idPersona } = req.params;
  const { nombre, domicilio, } = req.body;

  try {
    const personaActualizada = await Persona.update({
      nombre,
      domicilio
      
    }, {
      where: {
        idPersona: idPersona
      }
    });

    if (personaActualizada[0]) {
      res.json({
        mensaje: `La persona con el id ${idPersona} ha sido actualizada exitosamente`
      });
    } else {
      res.status(404).json({
        mensaje: `La persona con el id ${idPersona} no fue encontrada`
      });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Hubo un error al intentar actualizar la persona"
    })
  }
}


export { crearPersona, obtenerPersonas, eliminarPersona, actualizarPersona };
