import { Router } from "express";
import * as ProductoController from "./ProductoController.js";
const ProductoRouter = Router();



ProductoRouter.get("/productos", ProductoController.getAll); 
ProductoRouter.get("/productos/:id", ProductoController.getId);
ProductoRouter.get("/producto/:name", ProductoController.getName);
ProductoRouter.post("/alta", ProductoController.addProduct)
ProductoRouter.patch("/EditProducto", ProductoController.update)
ProductoRouter.delete("/producto/:id", ProductoController.deleteOne)




export default ProductoRouter