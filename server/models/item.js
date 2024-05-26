const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    id:Number,
    title:String,
    category:String,
    price:Number,

    
        // id: Number,
        // title: String,
        // description: String,
        // category: String,
        // price: Number,
        // discountPercentage: Number,
        // rating: Number,
        // stock: Number,
        // tags: [String],
        // brand: String,
        // sku: String,
        // weight: Number,
        // dimensions: {
        //     width: Number,
        //     height: Number,
        //     depth: Number
        // },
        // warrantyInformation: String,
        // shippingInformation: String,
        // availabilityStatus: String,
        // reviews: [reviewSchema],
        // returnPolicy: String,
        // minimumOrderQuantity: Number,
        // meta: {
        //     createdAt: Date,
        //     updatedAt: Date,
        //     barcode: String,
        //     qrCode: String
        // },
        // images: [String],
        // thumbnail: String
})

const ItemModel = mongoose.model('items',ItemSchema)

module.exports = ItemModel;