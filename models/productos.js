
import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    id: { type: String },
    idTienda: {type: String},
    selectedFile: String,
})

export default mongoose.model("Productos", productSchema);