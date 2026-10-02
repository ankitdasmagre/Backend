/**
 * File Name: controllers/categoryController.js
 * Purpose: Category logic (GET and POST/Push)
 */

const mongoose = require('mongoose');
const categoryCollection = require('../collection/categoryCollection'); 
const categoryController = {
    // 1. GET Method - Category details retrieve karne ke liye
    getCategory: async (req, res) => {
        try {
            const result = await categoryCollection.find();
            if(result){
                return res.status(200).json({
                status:200,
                message:"Category data get successfuly ",
                data:result
                });
                }
                else{
                return res.status(200).json({
                status:200,
                message:"Category data not gate ! ",
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
        return res.status(200).json({
            status: 200,
            message: "Category data fetched successfully via GET",
            data: req.body 
        });
    },

// 2. POST request to push/add category
    add_category: async (req,res) =>{
        
        try{
            const{name, description} = req.body;
            const result = await categoryCollection.create({name, description});
            if(result){
                return res.status(200).json({
                status:200,
                message:"Category create successfuly ",
                data:result
                });
            }else{
                return res.status(200).json({
                status:200,
                message:"Category data not create ! ",
                data:req.body
                });
            }
        }catch (error){
            return res.status(404).json({
            status:200,
            message:"something wrong ! ",
            data:error
            });
        }
        
    },
    
// 2. GET request to fetch a specific category by ID / Find
    getCategoryid: async (req,res) =>{
        try {
            const value = req.params.id;
            
            let result; 
            if (mongoose.Types.ObjectId.isValid(value)) { 
                result = await  categoryCollection.findById(value); 
            } else { 
                result = await categoryCollection.findOne({ name: value }); 
            }
            // const result = await categoryCollection.findById(_id);
            
            if(result){
                return res.status(200).json({
                status:200,
                message:"Category find successfuly ",
                data:result
                });
            }else{
                return res.status(200).json({
                status:200,
                message:"Category data not create ! ",
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
    updateCategory: async (req,res) =>{
        try {
            const{name, description} = req.body;
            const _id = req.params.id;
            const result = await categoryCollection.findByIdAndUpdate(
                _id,
                {name, description},
                {new:true}
            );
            if(result){
                return res.status(200).json({
                status:200,
                message:"Category update successfuly ",
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
    deleteCategory: async (req,res) =>{
        try {
            const{name, description} = req.body;
            const _id = req.params.id;
            const result = await categoryCollection.findByIdAndDelete(_id);
            return res.status(200).json({
                status:200,
                message:"Category delete successfuly ",
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


    // 2. POST Method - Category data push / add karne ke liye
//     addCategory: async (req, res) => {
//         return res.status(200).json({
//             status: 200,
//             message: "Category data pushed successfully via POST",
//             data: req.body 
//         });
//     }
// };

        
};

module.exports = categoryController;