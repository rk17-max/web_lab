const express=require("express");

const app=express()

const port=8000;


app.get("/",(req,res)=>{
    res.send("testing.......")
})

app.listen(port,()=>{
    console.log("server running at port 8000")
})


