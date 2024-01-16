const mongoose = require("mongoose")
require('dotenv').config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo db connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
module.exports = connectDB;



// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/authorization").then(()=>console.log("Working Fine .."));
