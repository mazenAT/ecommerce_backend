const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser= require("body-parser");
const mongooseDB = require("mongoose");


//routes
const userRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');

env.config();

//connect to database 

mongooseDB.connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.gcpdm.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
    ).then(()=>{
        console.log('Database connected');
    });

app.use(bodyParser.json());

app.use('/api',userRoutes);
app.use('/api',adminRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT:${process.env.PORT}`);
});