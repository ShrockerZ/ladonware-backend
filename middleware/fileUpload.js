const path= require('path');
const multer= require('multer'); 

let storage= multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,`./images`)},
    // nombre del fichero ques se ba a subir 
    filename:(req,file,callback)=>{
        callback(null,`${Date.now()}-image-${file.originalname}`)}
})
exports.upload= multer({storage});
