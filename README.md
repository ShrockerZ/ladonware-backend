Prueba Tecnica Ladonware
=============
Prueba tecnica para Ladonware desarrollado por Manuel Alberto Medina Gomez en nodeJs v12.18
Nota:se debe contar con una base de datos de MongoDB ya sea local en el puerto 27017 
o online  

### valores por defecto del proyecto 
**SERVER_PORT=3000**<br>
**MONGO_URI=mongodb://localhost:27017/ladonware_fullstack**<br>
estos valores se puede cambiar para usar una direccion diferente como MONGO_URI
creando un archivo `.env` en la raiz del proyecto, agregar la variable de entorno  *`MONGO_URI=<mi_base_de_datos_Mongo>`* 
ej. **MONGO_URI=mongodb+srv://<username>:<password>@cluster0.bgyhr.mongodb.net/ladonware_fullstack?retryWrites=true&w=majority**

### rutas
todas las rutas del proyecto fueron colocadas como localhost:3000/api/
ej.  (localhost:3000/api/products,localhost:3000/api/categories)
 
### Iniciar el Proyecto
- `git clone https://github.com/ShrockerZ/ladonware-backend `--->clonar repositorio del Proyecto
- `cd ladonware-backend` ---> acceder al directorio del proyecto
- `npm install` --->instalar dependencias del proyecto
- `npm start`   --->iniciar el Proyecto  en el puerto:3000
