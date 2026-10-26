const express = require('express');

const userController = require('../controllers/userController');
const categoryController = require('../controllers/categoryController');
const itemController = require('../controllers/itemController');
const brandController = require('../controllers/brandController');
const productController = require('../controllers/productController');

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


// --- Brand Routes ---

// 1. GET request for Brand
Router.get('/get-brand',brandController.getBrand);

// 2. Post request to push / add Brand
Router.post('/add-brand',brandController.addBrand);

//  3. Get request to fetch a specific brand by ID / Find

Router.get('/get-brand-id/:id',brandController.getbrandid);

//  4. PUT request to update an existing Brand By ID

Router.put('/update-brand/:id',brandController.updateBrand);

// 5. DELETE request to remove a Brand By ID 

Router.delete('/delete-brand/:id',brandController.deleteBrand);

// // --- Product Routes ---

// 1. Get Request for Product

Router.get('/get-product',productController.getProduct);

// 2. POST request to push/add Product

Router.post('/add-product',productController.addProduct);

// 3. GET request to fetch a specific Product by ID / Find 

Router.get('/get-product-id/:id',productController.getProductid);

// 4. PUT request to update an existing Product by ID

Router.put('/update-product/:id',productController.updateProduct);

// 5. DELETE request to remove a Product by ID

Router.delete('/delete-product/:id',productController.deleteProduct);




module.exports = Router;