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

// app.post('/add',(req,res) => {
//     const item = req.body.item;
//     ItemModel.create({
//         item: item
//     }).then(result => res.json(result))
//     .catch( e => console.log(e))
// })

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

