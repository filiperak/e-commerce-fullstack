const Item = require('../models/item');

const getAllItems = async (req,res) => {
    try{
        const items = await Item.find();
        res.json(items);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const getSingleItem = async(req,res) => {
    res.json(res.item);
}

const createItem = async(req,res) => {
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
}

const updateItem = async (req, res) => {
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
}

const deleteItem = async (req,res) => {
    try{
        await res.item.deleteOne();
        res.json({message:'deleted item'})
    }catch(error){
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAllItems,
    getSingleItem,
    createItem,
    updateItem,
    deleteItem
};