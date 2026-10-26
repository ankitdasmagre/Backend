const mongoose = require('mongoose');
const brandSchema = new mongoose.Schema(
    {
        brand_name:{
            type:String,
            required :true,
            unique: true,
        },

        brand_slug:{
            type:String,
            required : true,

        },

        brand_description:{
            type:String,
            required : true,

        },
        

    },

    {
        timestamps:true
    }
);

const Brand = mongoose.model('Brand',brandSchema);
module.exports = Brand;