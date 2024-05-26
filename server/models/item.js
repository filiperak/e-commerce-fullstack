const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    productId:String,
    title:String,
    category:String,
    price:Number,
    thumbnail:String,
    rating:Number,
    images:[String]
})

const ItemModel = mongoose.model('items2',ItemSchema)

module.exports = ItemModel;