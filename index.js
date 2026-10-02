const express = require('express');
const core = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(core());
app.use(bodyParser.json());

const all_route = require('./routes/routes');

const connectDB = require('./config/db');

connectDB();

// app.get("/get-data",(request,response) =>{
//     const data =['name','email'];
//     console.log('20',request.body);
    
//     return response.status(200).json({
//         status:200,
//         message:"my first api",
//         data:request.body
//     });
// });
app.use('/api',all_route);

app.listen(5000,()=>{
    console.log('server is running 5000');
});