const mongoose = require('mongoose');
//Schema
const userSchema = new mongoose.Schema({
    name : String ,
    email : String,
    password : String
  });


  module.exports= userSchema;