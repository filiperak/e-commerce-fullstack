require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

const itemsRouter = require('./routes/item');
app.use('/items', itemsRouter);

const userRouter = require('./routes/user')
app.use('/user',userRouter)

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
