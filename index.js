// require & const + routes
const express=      require('express');
const app    =      express();
const dotenv =      require('dotenv').config({path:"./.env"});
const port   =      3000 || process.env.SERVER_PORT;
const router =      require('./routes');
// database
require('./config/database');

// middleware
app.use(express.json());
app.use('/',router);


app.listen(port,()=>{
    console.log(`Servidor en puerto ${port}`)
});
