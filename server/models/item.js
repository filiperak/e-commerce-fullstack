const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
   title:{
    type:String,
    required:true
   },
   category:{
    type:String,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   thumbnail:{
    type:String,
   },
   images:[String],
   brand:String,
   description:String,
})

module.exports = mongoose.model('Items',ItemSchema)
