const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
        product_name:{
            type:String,
            required:true,
            
        },
        // product_img:{
        //     type:Image,
        //     required:true,
        // },
        product_description:{
            type:String,
            required:true,
        },
        brand_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref : 'Brand',
            required: true,
        },
        item_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref : 'Item',
            required: true,
        }
        
    },
    {
        timestamps:true
    }
);
const Product = mongoose.model('Product',productSchema);
module.exports = Product;