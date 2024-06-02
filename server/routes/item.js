const express = require('express');
const router = express.Router();
const Item = require('../models/item');

router.get('/', async (req,res) => {
    try{
        const items = await Item.find();
        res.json(items);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

router.get('/:id',getItems,async (req,res) => {
    res.json(res.item);
})

router.post('/', async (req,res) => {
    const item = new Item({
        title : req.body.title,
        category : req.body.category,
        price : req.body.price,
        thumbnail : req.body.thumbnail,
        images : req.body.images,
        brand : req.body.brand,
        description : req.body.description,
    })
    try{
        const newItem = await item.save()
        res.status(200).json(newItem)
    }catch(error){
        res.status(400).json({message:error.message})
    }
})

router.patch('/:id', getItems, async (req, res) => {
    const updates = ['title', 'category', 'price', 'thumbnail', 'images', 'brand', 'description','rating'];
    
    updates.forEach(elem => {
        if (req.body[elem] != null) {
            res.item[elem] = req.body[elem];
        }
    });

    try {
        const updatedItem = await res.item.save();
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id',getItems,async (req,res) => {
    try{
        await res.item.deleteOne();
        res.json({message:'deleted item'})
    }catch(error){
        res.status(400).json({ message: error.message });
    }
})

async function getItems(req,res,next){
    let item;
    try{
        item = await Item.findById(req.params.id)
        if(item === null) return res.status(404).json({message:"Can't fint item"})
    }catch(error){
        return res.status(500).json({ message: err.message })
    }
    res.item = item;
    next();
}
module.exports = router;