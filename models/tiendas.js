
import mongoose from "mongoose";

const tiendaSchema = mongoose.Schema({
    name: { type: String, required: true },
    id: { type: String },
})

export default mongoose.model("Tiendas", tiendaSchema);