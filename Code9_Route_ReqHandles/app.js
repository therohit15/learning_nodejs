const express = require("express");
const app = express();
const port = 1515;
app.get("/tes?t",(req,res)=>{
    res.send("Sucess1");
})
app.get("/t(ese)?t",(req,res)=>{
    res.send("Sucess2");
})
app.get("/tesa+t",(req,res)=>{
    res.send("Sucess3");
})
app.get("/tesb*t",(req,res)=>{
    res.send("Sucess4");
})
app.get(/a/,(req,res)=>{
    res.send("Sucess5");
    console.log(req.query);
    
})
app.get(/.*fly/,(req,res)=>{
    res.send("Sucess6");
})
app.get("/user/:userID/:pass/:age",(req,res)=>{
    res.send("Sucess6");
    console.log(req.params);
})
app.listen(port,()=>{
    console.log("Listening to the port 1515");
})