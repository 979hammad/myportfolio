const mongoose = require("mongoose");
const validator = require("validator");
const express = require("express");

const ContactUsSchema = new mongoose.Schema({
      name: {
        type : String,
        required : true
      },
      email: {
        type : String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email");
            }
        }
      },
      phone: {
        type : Number,
        required : true,
        min: 11
      },
      message: {
        type : String,
        required : true,
        minLength: 4
      }
})

const collectionName = new mongoose.model("collecionName",ContactUsSchema);

module.exports = collectionName;