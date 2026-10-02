const express = require('express');

const userController = require('../controllers/userController');
const categoryController = require('../controllers/categoryController');
const itemController = require('../controllers/itemController');
const Router = express.Router();

            // --- User Routes ---

// 1. GET request for category
Router.get('/user',userController.getUser);

// 2. POST request to push/add user
Router.post('/create-user', userController.create_User);

// 3. GET request to fetch a specific user by ID / Find 
Router.get('/get-user-id/:id',userController.getUserid);

// 4. PUT request to update an existing user by ID
Router.put('/update-user/:id',userController.updateUser);

// 5. DELETE request to remove a user by ID
Router.delete('/delete-user/:id',userController.deleteUser)

//Router.post('/get-data',userController.getData);

            // --- Category Routes ---

// 1. GET request for category
Router.get('/get-category', categoryController.getCategory);

// 2. POST request to push/add category
Router.post('/add-category', categoryController.add_category);

// 3. GET request to fetch a specific category by ID / Find 
Router.get('/get-category-id/:id',categoryController.getCategoryid);

// 4. PUT request to update an existing category by ID
Router.put('/update-category/:id',categoryController.updateCategory);

// 5. DELETE request to remove a category by ID
Router.delete('/delete-category/:id',categoryController.deleteCategory);

            // --- Item Routes ---

// 1. GET request for item
Router.get('/get-item', itemController.getItem);

// 2. POST request to push/add item
Router.post('/add-item', itemController.add_item);

// 3. GET request to fetch a specific item by ID / Find 
Router.get('/get-item-id/:id',itemController.getItemid);

// 4. PUT request to update an existing item by ID
Router.put('/update-item/:id',itemController.updateItem);

// 5. DELETE request to remove a item by ID
Router.delete('/delete-item/:id',itemController.deleteItem);




module.exports = Router;