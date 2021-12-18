const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const userRoute =  require('./route/user.route');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute);

app.listen(3030, (err)=>{
    if(!err){
        mongoose
        .connect(process.env.CONNECTION_STRING)
        .then(async (conStatus) => {
        console.log("connection success");
        })
        .catch((err) => {
        console.log(err);
        console.log("Connection failed");
        });
    }
});