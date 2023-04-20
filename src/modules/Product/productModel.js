import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    id: {type: Number, unique:true, required:true, },
    nombre: {type: String, required:true},
    precio: {type: Number, required:true, min:200},
    stock: {type: Number, required: true, min:0},
    marca: String,
    categoria: String,
    descripcion: {type: String, required: true},
    imagen: String 
})

const Producto = mongoose.model("Producto", ProductSchema); 

export default Producto; 