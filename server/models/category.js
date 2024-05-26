const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    type: [String],
})

const CategoryModel = mongoose.model('categories',CategorySchema);

module.exports = CategoryModel;