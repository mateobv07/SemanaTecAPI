import mongoose from "mongoose";
import Productos from "../models/productos.js"

export const getProducts = async (req, res) => {
    try {
        //filter from new->old, only get LIMIT amount statring from index
        const productos = await Productos.find().sort({ _id: -1});

        res.status(200).json({ data: productos });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProducts = async (req, res) => {
    const product = req.body;
    const newProduct = new Productos({ ...product })

    try {
        await newProduct.save()
        
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}