const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    id:Number,
    title:String,
    category:String,
    price:Number,
    thumbnail:String,
    rating:Number,
    images:[String],
    brand:String,
    description:String
})

const ItemModel = mongoose.model('items2',ItemSchema)

module.exports = ItemModel;