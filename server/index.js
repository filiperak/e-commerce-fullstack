const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const ItemModel = require('./models/item')
const CategoryModel = require('./models/category')
const mongoDBURL = require('./config.js')
const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect(mongoDBURL)
.then(() => {
    console.log('connected to db')
    app.listen(5000, () => {
        console.log(('server is running'));
    })
})
.catch(e => console.log(e));

app.get('/items', (req, res) => {
    ItemModel.find()
    .then(items => res.json(items))
    .catch(e => res.status(500).json({ error: e.message }));
});

app.get('/category', (req, res) => {
    CategoryModel.find()
    .then(category => res.json(category))
    .catch(e => res.status(500).json({ error: e.message }));
});

// app.get('/:category', (req, res) => {
//     const category = req.params.category;
//     ItemModel.find({ category: category })
//         .then(items => res.json(items))
//         .catch(err => res.status(500).json({ error: err.message }));
// });

app.get('/:category', (req, res) => {
    const category = req.params.category;
    ItemModel.find({ category: category })
    .then(items => {
        if (!items || items.length === 0) {
            return res.status(404).json({ message: 'no items' });
        }
        res.json(items);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// app.get('items?id=:productId', (req, res) => {
//     const productId = req.params.productId;
//     ItemModel.find({ id: productId })
//         .then(items => {
//             if (!items || items.length === 0) {
//                 return res.status(404).json({ message: 'no items' });
//             }
//             res.json(items);
//         })
//         .catch(err => res.status(500).json({ error: err.message }));
// });

app.get('/items/:productId', (req, res) => {
    const productId = req.params.productId;

    // Find the item with the specified productId
    const item = items.find(item => item.products.some(product => product.id === Number(productId)));

    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    // Find the product within the item's products array
    const product = item.products.find(product => product.id === Number(productId));

    res.json(product);
});
