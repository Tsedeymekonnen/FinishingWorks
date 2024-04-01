const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const app = express()

app.use(express.json());
app.use(bodyParser.json());

const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
});

// Create a model based on the schema
const Product = mongoose.model(" Product", ProductSchema);


app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated")
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//UPDATE a Product
app.put('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const UpdatedProduct = await Product.findById(id);

        res.status(200).json(UpdatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//Delete a product
app.delete('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product delete successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
mongoose.connect('mongodb://localhost:27017/Remove')
    .then(() => {
        console.log('Connected to database!');
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });

    })
    .catch(() => {
        console.log("Connection failed!")
    });