require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

const itemsRouter = require('./routes/item');
app.use('/items', itemsRouter);

app.listen(5000, () => console.log('Server is running on port 5000'));
