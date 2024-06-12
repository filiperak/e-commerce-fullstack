const ItemServices = require("../services/items");

const getAllItems = async (req, res) => {
  try {
    const items = await ItemServices.getAllItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await ItemServices.getItemById(req.params.id);
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createItem = async (req, res) => {
  try {
    const newItem = await ItemServices.createItem(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateItem = async (req, res) => {
  try {
    const updatedItem = await ItemServices.updateItem(req.params.id, req.body);
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    await ItemServices.deleteItem(req.params.id);
    res.json({ message: "Item deleted"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
