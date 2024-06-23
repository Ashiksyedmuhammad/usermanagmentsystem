const express = require("express");
const path = require ("path");
const mongoose= require('mongoose');

const app= express();
const port = 3000;

app.set('view engine','ejs');
app.use("/static",express.static(path.join(__dirname,'public')));



//connect to mongoDB

mongoose.connect("mongodb://localhost:27017/userdatabase")
.then(()=>{
    console.log("succesfully connected to mongoDB");
}).catch(()=>{
    console.error("Error Connecting to mongoDB");
});

app.get('/',(req,res)=>{
    res.render("login");
})

app.get('/Signup',(req,res)=>{
    res.render("signup");
})


app.listen(port,()=>console.log("http://localhost:3000"));