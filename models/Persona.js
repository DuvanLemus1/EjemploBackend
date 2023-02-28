import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';

import Mascota from './Mascota.js';

const Persona = sequelize.define('personas', {
  idPersona: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    
  },
  nombre: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  domicilio: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
},{
  tablename:'personas'
},
{
  timestamps: false,
  freezeTableName: true
}
);

Mascota.belongsTo(Persona,{foreignKey: 'idPersona'});
Persona.hasMany(Mascota,{foreignKey: 'idPersona'});


export default Persona;
