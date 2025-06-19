import { Router } from "express";
import * as ProductoController from "./ProductoController.js";
import upload from "../../middlewares/file.js";

const ProductRouter = Router();


ProductRouter.get("/productos", ProductoController.getAll); 
ProductRouter.get("/productos/:id", ProductoController.getId);
ProductRouter.post("/alta", upload.single("archivo"), ProductoController.addProduct);
ProductRouter.patch("/EditProducto", ProductoController.update);
ProductRouter.delete("/producto/:id", ProductoController.deleteOne);



export default ProductRouter;