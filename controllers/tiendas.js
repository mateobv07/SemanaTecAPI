import mongoose from "mongoose";
import Tiendas from "../models/tiendas.js"

export const getTiendas = async (req, res) => {
    try {
        //filter from new->old, only get LIMIT amount statring from index
        const tiendas = await Tiendas.find().sort({ _id: -1});

        res.status(200).json({ data: tiendas });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createTiendas = async (req, res) => {
    const tiendas = req.body;
    const newTienda = new Tiendas({ ...tiendas })

    try {
        await newTienda.save()
        
        res.status(201).json(newTienda);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}