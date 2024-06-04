const express = require('express');
const router = express.Router();
const getItems = require('../middleware/itemMiddleware')
const {getAllItems,getSingleItem,updateItem,createItem,deleteItem} = require('../controllers/item')

router.get('/', getAllItems);

router.get('/:id', getItems, getSingleItem);

router.post('/', createItem);

router.patch('/:id', getItems, updateItem);

router.delete('/:id', getItems, deleteItem);


module.exports = router;