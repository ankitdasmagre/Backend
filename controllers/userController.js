

const mongoose = require('mongoose');
const userCollection = require('../collection/userCollection');


const userController = {
    getUser: async (req,res) =>{
        return res.status(200).json({
            status:200,
            message:"my second user ",
            data:req.body
        });
    },

// 1. GET Method - user details retrieve karne ke liye
// . POST request to push/add user
    create_User: async (req,res) =>{
        try{
            const{name, email, password, mobile} = req.body;
            const result = await userCollection.create({name, email, password, mobile});
            if(result){
                return res.status(200).json({
                status:200,
                message:"user data create successfuly ",
                data:result
                });
            }else{
                return res.status(200).json({
                status:200,
                message:"user data not create ! ",
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
    getUserid: async (req,res) =>{
        try {
            const value = req.params.id;
            
            let result; 
            if (mongoose.Types.ObjectId.isValid(value)) { 
                result = await  userCollection.findById(value); 
            } else { 
                result = await userCollection.findOne({ name: value }); 
            }
            
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
        } catch (error) {
            return res.status(404).json({
            status:200,
            message:"something wrong ! ",
            data:error
            });
        }
    },
// 3. PUT request to update an existing category by ID 
        updateUser: async (req,res) =>{
            try {
                const{name, email, password, mobile} = req.body;
                const _id = req.params.id;
                const result = await userCollection.findByIdAndUpdate(
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
        deleteUser: async (req,res) =>{
            try {
                const{name, email, password, mobile} = req.body;
                const _id = req.params.id;
                const result = await userCollection.findByIdAndDelete(_id);
                return res.status(200).json({
                    status:200,
                    message:"User delete successfuly ",
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


module.exports = userController;
