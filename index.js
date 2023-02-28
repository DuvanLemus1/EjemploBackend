
import express from 'express';
import sequelize from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import routerPersonas from './routes/routePersona.js';
import routerMascotas from './routes/routerMascota.js';


const app = express();
app.use(express.json());
dotenv.config();


//Configurar CORS
const whitelist=["http://127.0.0.1:5173"];

const corsOptions={
  origin: function(origin, callback){
    if(whitelist.includes(origin)){
      //Consulta la API
      callback(null,true);
  }else{
      //No permitido
      callback(new Error("Error de CORS"))
  }
  },
};
app.use(cors(corsOptions));


//Probar la conexion a la BD --------------------------------
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error);
  });
//------------------------------------------------------------


//Administrar Routing-----------------------------------------
app.use("/api/personas", routerPersonas);
app.use("/api/mascotas", routerMascotas);

//------------------------------------------------------------


//Administrar Puertos----------------------------------------
const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Corriendo en el puerto ${PORT}`);
});
