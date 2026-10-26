

const mongoose = require('mongoose');
const itemCollection = require('../collection/itemCollection');
const Category = require('../collection/categoryCollection');
const itemController ={
    getItem : async (req,res) =>{
        try {
            // category ke shat connection 
            const items = await itemCollection.find().populate('category_id').lean();
            // selling price me 10% calculation 
            const result = items.map((row) =>({
                ...row,
                selling_price: Number((row.item_price * 1.10).toFixed(2))
            }));
            // const items = await Item.find().populate('category');
            if(result){
                return res.status(200).json({
                status:200,
                message:"Item data get successfuly ",
                data:result
                });
            }
            else{
                return res.status(200).json({
                status:200,
                message:"Item data not gate ! ",
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
// 1. POST request to push/add user
add_item: async (req,res) =>{
        try{
            const{item_name, item_description, item_price, category_id } = req.body;
            const item_response = await itemCollection.create({item_name, item_description, 
                item_price, category_id})
                // category ke shat connection 
            const result = await itemCollection.findById(item_response._id).populate('category_id').lean();
            // selling price me 10% calculation 
            result.selling_price = Number(
                (result.item_price * 1.10).toFixed(2)
            );
            
            if(result){
                return res.status(200).json({
                status:200,
                message:"item data create successfuly ",
                data:result
                });
            }else{
                return res.status(200).json({
                status:200,
                message:"item data not create ! ",
                data:req.body
                });
            }
        }catch (error){
            return res.status(200).json({
            status:200,
            message:"something wrong ! ",
            data:error
            });
        }
        
    },
// 2. GET request to fetch a specific user by ID / Find
    getItemid: async (req,res) =>{
        try {
            const value = req.params.id;
            
            let result; 
            if (mongoose.Types.ObjectId.isValid(value)) { 
                result = await  itemCollection.findById(value); 
            } else { 
                result = await itemCollection.findOne({ name: value }); 
            }
            
            if(result){
                return res.status(200).json({
                status:200,
                message:" item find successfuly ",
                data:result
                });
            }else{
                return res.status(200).json({
                status:200,
                message:"Item data not create ! ",
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
// 3. PUT request to update an existing category by ID 
        updateItem: async (req,res) =>{
            try {
                const{item_name, item_description, item_price} = req.body;
                const _id = req.params.id;
                const result = await itemCollection.findByIdAndUpdate(
                    _id,
                    {item_name, item_description, item_price},
                    {new:true}
                );
                if(result){
                    return res.status(200).json({
                    status:200,
                    message:"Item update successfuly ",
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
    
// 4. DELETE request to remove a category by ID
        deleteItem: async (req,res) =>{
            try {
                const{item_name, item_description, item_price} = req.body;
                const _id = req.params.id;
                const result = await itemCollection.findByIdAndDelete(_id);
                return res.status(200).json({
                    status:200,
                    message:"Item delete successfuly ",
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

module.exports = itemController;