const mongoose = require('mongoose');
const brandCollection = require('../collection/brandCollection');
const brandController = {
    getBrand: async  (req,res) =>{
        try {
            const result = await brandCollection.find();
            if(result){
                return res.status(200).json({
                    status:200,
                    message:"Brand data get Successfuly",
                    data:result
                });
            }
            else{
                return res.status(200).json({
                    status:200,
                    message:"Brand data not gate  ",
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
    addBrand : async (req,res) =>{
        try {
            const{brand_name,brand_slug,brand_description} =req.body;
            const result = await brandCollection.create({brand_name,brand_slug,brand_description});
        
            if(result){
                return res.status(200).json({
                    status:200,
                    message:"Brand create successfuly",
                    data:result
                });
            }
            else{
                return res.status(200).json({
                    status:200,
                    message:"Brand data not create  ",
                    data:req.body
                });
            }
        }catch (error){
            return res.status(404).json({
                status:200,
                message:"Something wrong",
                data:error
            });
        }
    },
    getbrandid: async (req,res) =>{
        try {
            const value = req.params.id;
            let result;
            if(mongoose.Types.ObjectId.isValid(value)){
                result = await brandCollection.findById(value);
            } else{
                result = await brandCollection.findOne({name: value});
            }
            if(result){
                return res.status(200).json({
                status:200,
                message:" Brand find successfuly ",
                data:result
                });
            }else{
                return res.status(200).json({
                status:200,
                message:"Brand data not create ! ",
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
    updateBrand :async (req,res) =>{
        try {
            const {brand_name,brand_slug,brand_description} = req.body;
            const _id = req.params.id;
            const result = await brandCollection.findByIdAndUpdate(
                _id,{brand_name,brand_slug,brand_description},
                {new:true}
            );
            if(result){
                    return res.status(200).json({
                    status:200,
                    message:"Brand update successfuly ",
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
    deleteBrand : async (req,res) =>{
        try {
            const {brand_name,brand_slug,brand_description} = req.body;
            const _id = req.params.id;
            const result =  await brandCollection.findByIdAndDelete(_id);
            return res.status(200).json({
                status:200,
                message:"Brand delete successfuly",
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
module.exports = brandController;