const mongoose= require('mongoose');
const CategorySchema= new mongoose.Schema({
    title:{
        type:String,
        trim:true
    }
})


module.exports= mongoose.model('Category',CategorySchema);