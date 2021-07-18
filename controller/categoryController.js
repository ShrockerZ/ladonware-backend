const Category= require('../models/Category');
exports.getCategories=async (req,res)=>{
    try{
        categories=await Category.find();
        return res.status(200).json(categories);
    }catch(error){
        console.log(error)
        res.status(400).json({error:"error Obteniendo Categorias || getCategories()"});
    }
}