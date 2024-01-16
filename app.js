const express = require("express")
require('dotenv').config()
const connectDB = require("./dbconnection/dbConnection")
const routeApi = require('./routes/route');
connectDB();
const app = express();
//app.use(cors());
//app.use(json());


const server = app.listen(7500, ()=>{
    console.log('Server is running on posrt 7500');
})
app.use(express.json());
app.use("/api",routeApi);