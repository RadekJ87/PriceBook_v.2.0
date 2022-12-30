import express from "express";
import {Product} from "../models/Product.js";


const productRouter = express.Router();

productRouter
    .get("/", async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json(error);
        }
    })
    .post("/", async (req, res) => {
        try {
            const newProduct = new Product(req.body);
            await newProduct.save();

            console.log(newProduct)

            res.status(200).json(`${req.body.description} added to database`);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    })


export default productRouter;