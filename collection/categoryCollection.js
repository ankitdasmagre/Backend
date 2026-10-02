const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema(
    {  
        name:{
            type:String,
            required:true,
            trim:true,
        },
        description:{
            type:String,
            required:true,
            trim:true,
            maxlenght:250
        }
        
    },
    
    {
            timestamps:true
        }
    
);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;