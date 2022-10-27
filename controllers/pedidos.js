import mongoose from "mongoose";
import Pedidos from "../models/pedidos.js"
import Productos from "../models/productos.js"

export const getPedidos = async (req, res) => {
    try {
        //filter from new->old, only get LIMIT amount statring from index
        const pedidos = await Pedidos.find().sort({ _id: -1});
        let output = []
        
        for (const pedido of pedidos) {
            let productos = await Productos.find({'_id': { $in: pedido.products}})
            output.push({
                "id": pedido._id,
                "fecha": pedido.createdAt,
                "productos": productos,
                "idTienda": pedido.idTienda
            })
            console.log(output)
          }
        
        res.status(200).json({ data: output });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createPedidos = async (req, res) => {
    const pedido = req.body;
    const newPedido = new Pedidos({ ...pedido })

    try {
        await newPedido.save()
        res.status(201).json(newPedido);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}