const mongoose=     require('mongoose');
require('dotenv').config({path:"../.env"});
const uri=          process.env.URI_MONGO || 'mongodb://localhost:27017/ladonware_prueba';
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{console.log("conexion Realizada con exito!!!");})
    .catch(error=>{console.log(`error de conexion --${error}`);})
mongoose.connection.on('error',(error)=>{console.log(`error de conexion --${error}`);})

// tables models
require('../models/Category');
require('../models/Product');

module.exports=mongoose;