import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true
}).catch(error => console.log(error.reason));

const app = express();

app.get("/api/products/:id", (req, res) => {
    const productID = req.params.id;
    const product = data.products.find(x => x._id === productID);
    if (product) {
        res.send(product);
    }
    else { res.status(404).send({ msg: 'Product Not Found.' }) }
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.listen(5000, () => { console.log('Server start at http://localhost:5000') });