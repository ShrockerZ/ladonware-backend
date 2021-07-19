require('dotenv').config({path:"../.env"});
const mongoose=     require('mongoose');
const uri=          process.env.URI_MONGO || 'mongodb://localhost:27017/ladonware_fullstack';

// connection
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false})
    .then(()=>{console.log("conexion Realizada con exito!!!");})
    .catch(error=>{console.log(`error de conexion --${error}`);})
mongoose.connection.on('error',(error)=>{console.log(`error de conexion --${error}`);})

// models
require('../models/Category');
require('../models/Product');

module.exports=mongoose;