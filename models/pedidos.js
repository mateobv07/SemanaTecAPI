
import mongoose from "mongoose";

const pedidoSchema = mongoose.Schema({
    id: { type: String },
    idTienda: {type: String },
    products: { type: [String], required: true },
    },
    {
    timestamps: true
})

export default mongoose.model("Pedidos", pedidoSchema);