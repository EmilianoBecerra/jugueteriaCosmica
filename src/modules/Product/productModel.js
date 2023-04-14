import mongoose from "mongoose";

const ProdcutSchema = new mongoose.Schema({
    "id": {type: Number, unique:true, required:true, },
    "nombre": {type: String, required:true},
    "precio": {type: Number, required:true, min:200},
    "stock": {type: Number, required: true, min:0},
    "marca": String,
    "categoria": String,
    "descripcionCorta": {type: String, required: true},
    "descripcionLarga": String,
    "envio": String,
    "edadDesde": Number,
    "edadHasta": Number,
    "imagen": String 
})

const Producto = mongoose.model("Producto", ProdcutSchema); 

export default Producto; 