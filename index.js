const express = require("express");
const cors = require("cors");
 
const app=express();

app.use(cors());
const port = process.env.PORT || 3000;

 
app.get("/",(req,res)=>{
    res.send("we are live");
});

app.get("/service",(req,res)=>{
    res.send(apiData);
})

app.listen(port,()=>{
    console.log("I am live with guide");
});
