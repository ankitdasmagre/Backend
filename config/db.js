const mongoose = require('mongoose');

const mongoDB = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/e_com');


// console. Log('Connected DB:, mongoose.connection.name);

        if (mongoose.connection.name === 'e_com'){

        console.log('database connect successfullyl');

        } else {

            console.log("database not connect successfully!");
            }
} catch (error) {

console.log('failed to database connection!', error);
    }
}

module.exports = mongoDB;