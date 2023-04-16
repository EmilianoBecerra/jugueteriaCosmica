import { Router } from "express";
import * as ProductoController from "./ProductoController.js";
import {upload} from "../../middlewares/file.js"
const ProductoRouter = Router();



ProductoRouter.get("/productos", ProductoController.getAll); 
ProductoRouter.get("/productos/:id", ProductoController.getId);
ProductoRouter.post("/alta", upload.single("archivo"), ProductoController.addProduct)
ProductoRouter.patch("/EditProducto", ProductoController.update)
ProductoRouter.delete("/producto/:id", ProductoController.deleteOne)




export default ProductoRouter