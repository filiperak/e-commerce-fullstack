const express = require("express");
const router = express.Router();
//const getItems = require("../middleware/itemMiddleware");
const {
  getAllItems,
  getItemById,
  updateItem,
  createItem,
  deleteItem,
} = require("../controllers/item");

router.get("/", getAllItems);

router.get("/:id", getItemById);

router.post("/", createItem);

router.patch("/:id", updateItem);

router.delete("/:id", deleteItem);

module.exports = router;