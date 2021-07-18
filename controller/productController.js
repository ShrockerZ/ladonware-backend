const Product= require('../models/Product');
const Category= require('../models/Category');

exports.getProducts=async (req,res)=>{
    const title=req.query.title
    const id=req.query.id;
    try{
        let products;
        if(title){
            const titleRegex=new RegExp(title.toLowerCase(),'i');
            products= await Product.find({title:titleRegex});
        }
        if(id) products= await Product.findById(id);
        if(!products) products= await Product.find();
        return res.status(200).json(products)
    }catch(error){
        console.log(error)
        return res.status(400).json({error:"!Error obteniendo Productos || getProducts()"})
    }
}
exports.resolveCategory=async (category_title="")=>{
    let category;
    category=await Category.findOne({title:category_title.toLowerCase()});
    if(!category){
        category=await Category.create({title:category_title.toLowerCase()});
        await category.save();
    } 
    return category._id;
}

exports.createProduct=async (req,res)=>{
    try{
        const product= req.body;
        const category_title=req.body.category
        product.category=await this.resolveCategory(category_title);
        console.log(product);
        const result=await Product.create(product);
        return res.status(200).json(result);
    }catch(error){
        console.log(error);
        return res.status(400).json({error:"!Error en creacion Productos || createProducts()"})
    }
}

exports.deleteProduct=async (req,res)=>{
    try{
        const id=req.params.id;
        const product= req.body;
        const result= await Product.findByIdAndDelete(id);
        return res.status(200).json({error:null});
    }catch(error){
        console.log(error);
        return res.status(400).json({error:"!Error en eliminacion Productos || deleteProduct()"})
    }
}
exports.updateProduct=async (req,res)=>{
    try{
        const id=req.params.id;
        const newproduct= req.body;
        const category_title=req.body.category;
        newproduct.category=await this.resolveCategory(category_title);
        const product= await Product.findByIdAndUpdate(id,newproduct);
        return res.status(200).json(product);
    }catch(error){
        console.log(error);
        return res.status(400).json({error:"!Error en actualizacion Productos || updateProducts()"})
    }
}