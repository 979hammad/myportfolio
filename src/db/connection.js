const mongoose = require("mongoose");
const express = require("express");

mongoose.connect("mongodb://localhost:27017/portfolioContactUsData")
.then(()=>{
    console.log("connection Successful...");
})
.catch((e)=>{
    console.log("connection Disconnected...");
})