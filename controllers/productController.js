const mongoose = require('mongoose');
const productCollection = require ('../collection/productCollection');
const productController ={
    getProduct: async (req,res) =>{
        try {
            const product = await productCollection.find().populate('brand_id').lean();
            if(product){
                return res.status(200).json({
                    status:200,
                    message:"Product get Successfuly",
                    data:product
                });
            }
            else{
                return res.status(200).json({
                    status:200,
                    message:"Product data not get",
                    data:req.body
                });
            }
        } catch (error) {
            return res.status(404).json({
                status:200,
                message:"something worng",
                data:error
            });
        }
    },
    addProduct : async (req,res) =>{
        try {
            const{product_name,product_description,brand_id,item_id} =req.body;
            const result = await productCollection.create({product_name,product_description,brand_id,item_id});
            if(result){
                return res.status(200).json({
                    status:200,
                    message:"Product create successfuly",
                    data:result
                });
            }
        } catch (error) {
            return res.status(404).json({
                status:200,
                message:"Something wrong",
                data:error
            });
        }
    },
    getProductid: async (req,res) =>{
        try {
            const value = req.params.id;
            let result;
            if(mongoose.Types.ObjectId.isValid(value)){
                result = await productCollection.findById(value);
            } else{
                result = await productCollection.findOne({name: value});
            }
            if(result){
                return res.status(200).json({
                status:200,
                message:" Product find successfuly ",
                data:result
                });
            }else{
                return res.status(200).json({
                status:200,
                message:"Product data not create ! ",
                data:req.body
                });
            }
        } catch (error) {
            return res.status(404).json({
            status:200,
            message:"something wrong ! ",
            data:error
            });
        }
    },
    updateProduct :async (req,res) =>{
        try {
            const {product_name,product_description} = req.body;
            const _id = req.params.id;
            const result = await productCollection.findByIdAndUpdate(
                _id,{product_name,product_description},
                {new:true}
            );
            if(result){
                    return res.status(200).json({
                    status:200,
                    message:"Product update successfuly ",
                    data:result
                    });
                }
        } catch (error) {
            return res.status(404).json({
                status:200,
                message:"something wrong ! ",
                data:error
                });
        }
    },
    deleteProduct : async (req,res) =>{
        try {
            const {product_name,product_description} = req.body;
            const _id = req.params.id;
            const result =  await productCollection.findByIdAndDelete(_id);
            return res.status(200).json({
                status:200,
                message:"Product delete successfuly",
                data:result
            });
        } catch (error) {
            return res.status(404).json({
                status:200,
                message:"something wrong ! ",
                data:error
                });
        }
    },

};

module.exports = productController;