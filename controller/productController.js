const Product= require('../models/Product');
const Category= require('../models/Category');
const fs= require('fs');
const path=require('path');

exports.getProducts=async (req,res)=>{
    const title=req.query.title
    const id=req.query.id;
    try{
        let products;
        if(title){
            const titleRegex=new RegExp(title.toLowerCase(),'i');
            products= await Product.find({title:titleRegex}).populate('category');
        }
        if(id && !products) products= await Product.findById(id).populate('category');
        if(!products) products= await Product.find().populate('category');
        
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
        product.image= req.file.filename
        product.category=await this.resolveCategory(category_title);
        const result=await Product.create(product)
        await result.populate('category');
        return res.status(200).json(result);
    }catch(error){
        console.log(error);
        return res.status(400).json({error:"!Error en creacion Productos || createProducts()"})
    }
}
exports.getProduct=async(req,res)=>{
    try{
    const id=req.params.id;
    const product = await Product.findById(id).populate('category');
    return res.status(200).json(product);
    }catch(error){
        console.log(error);
        return res.status(400).json({error:"!Error en obtencion Productos || deleteProduct()"})
    }
}

exports.deleteProduct=async (req,res)=>{
    try{
        const id=req.params.id;
        // Elminar imagen
        const oldproduct = await Product.findById(id);
        if(!oldproduct) return res.status(400).json({erro:"!Error en actualizacion Productos || updateProducts()"})
        const imagePath= './images/'+oldproduct.image;
        await fs.unlink(imagePath,(error)=>{
            if(error) console.log(error);
        });
        await Product.findByIdAndDelete(id);
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
        // Eliminar imagen anterior 
        const oldproduct = await Product.findById(id);
        const imagePath= './images/'+oldproduct.image;
        if(req.file){
            await fs.unlink(imagePath,(error)=>{
                if(error) console.log(error);
            })
            newproduct.image=req.file.filename;
        }else{
            newproduct.image=oldproduct.image;
        }
        const result= await Product.findByIdAndUpdate(id,newproduct);
        return res.status(200).json(result);
    }catch(error){
        console.log(error);
        return res.status(400).json({error:"!Error en actualizacion Productos || updateProducts()"})
    }
}
exports.getImage=async (req,res)=>{
    const id= req.params.id;
    const product=await Product.findById(id);
    const pathFile='./images/'+product.image
    fs.exists(pathFile,(exist)=>{
        if(exist){
            res.sendFile(path.resolve(pathFile));
        }else{
            res.send('imagen no existe ')
        }
    })
}