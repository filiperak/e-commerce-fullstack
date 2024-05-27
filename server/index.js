const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ItemModel = require("./models/item");
const CategoryModel = require("./models/category");
const mongoDBURL = require("./config.js");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("connected to db");
    app.listen(5000, () => {
      console.log("server is running");
    });
  })
  .catch((e) => console.log(e));

app.get("/items", (req, res) => {
  ItemModel.find()
    .then((items) => res.json(items))
    .catch((e) => res.status(500).json({ error: e.message }));
});

app.get("/category", (req, res) => {
  CategoryModel.find()
    .then((category) => res.json(category))
    .catch((e) => res.status(500).json({ error: e.message }));
});

app.get("/items/:id", (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "los id" });
  }

  ItemModel.findById(id)
    .then((item) => {
      if (!item) {
        return res.status(404).json({ error: "no items" });
      }
      res.json(item);
    })
    .catch((e) => res.status(500).json({ error: e.message }));
});

app.get("/items/category/:categoryName", (req, res) => {
  const { categoryName } = req.params;
  ItemModel.find({ category: categoryName })
    .then((items) => {
      if (!items || items.length === 0) {
        return res.status(404).json({ message: "no items" });
      }
      res.json(items);
    })
    .catch((e) => res.status(500).json({ error: e.message }));
});

app.post('/add',(req,res) => {
    const newItem = req.body;
    ItemModel.create(newItem)
    .then(res => res.json())
    .catch(e => res.json(e))
})