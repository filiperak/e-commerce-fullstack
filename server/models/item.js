const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    id:Number,
    title:String,
    category:String,
    price:Number,
})

const ItemModel = mongoose.model('items',ItemSchema)

module.exports = ItemModel;