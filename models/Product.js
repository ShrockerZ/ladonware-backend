const mongoose= require('mongoose');
const ProductSchema= new mongoose.Schema({
    title:{
        type:String,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    category:{
        type:ObjectId,
        ref:'Category'
    },
    price:{
        type:Number,
        trim:true
    },
    quantity:{
        type: Number,
    }
});

module.exports= mongoose.model('Product',ProductSchema);
