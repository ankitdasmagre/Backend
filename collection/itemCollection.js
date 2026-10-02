const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema(
    {
        item_name:{
            type:String,
            required: true,
        },
        
        item_description:{
            type:String,
            required: true,
            
        },
        item_price:{
            type:Number,
        },
        category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Category model ka exact name
        required: true,  // Har item kisi na kisi category me hona chahiye
    },

    },
    
    {
            timestamps:true
        }
);
const Item = mongoose.model('Item', itemSchema);
module.exports = Item;