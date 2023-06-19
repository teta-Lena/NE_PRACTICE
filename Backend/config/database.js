const mongoose = require('mongoose');

const {MONGO_URI} = process.env;

exports.connect=()=>{

mongoose.connect(MONGO_URI,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
 .then(()=>{
    console.log("Connected successfully ....");
 })
 .catch((error)=>{
    console.log("database connection failed. ....");
    console.log(error);
    process.exit(1);
 })

}