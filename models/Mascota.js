
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Persona from './Persona.js';

const Mascota = sequelize.define('mascotas', {
    idMascota: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idPersona:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    tablename:'mascotas'
  },{
    timestamps: false,
    freezeTableName: true
  });

  
//Mascota.belongsTo(Persona,{foreignKey: 'idPersona'});
//Mascota.Persona=Mascota.belongsTo(Persona);

export default Mascota;

