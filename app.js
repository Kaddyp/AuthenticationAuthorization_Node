const express = require("express")
const cors = require("cors");
require('dotenv').config()
const connectDB = require("./dbconnection/dbConnection")
const routeApi = require('./routes/route');
connectDB();
const app = express();

app.use(cors({
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',   
    'preflightContinue': false
}));
//app.use(json());

app.get('/', (req, res)=>{
    res.send('Server Running on 7500!')
})

const server = app.listen(7500, ()=>{
    console.log('Server is running on posrt 7500');
})
app.use(express.json());
app.use("/api",routeApi);