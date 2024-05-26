const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const ItemModel = require('./models/item')
const mongoDBURL = require('./config.js')
const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect(mongoDBURL)

app.post('/add',(req,res) => {
    const item = req.body.item;
    ItemModel.create({
        item: item
    }).then(result => res.json(result))
    .catch( e => console.log(e))
})

app.get('/items', (req, res) => {
    ItemModel.find()
    .then(items => res.json(items))
    .then(items => console.log(items))
    .catch(e => res.status(500).json({ error: e.message }));
});

app.listen(5000, () => {
    console.log(('server is running'));
})
console.log(mongoDBURL)
