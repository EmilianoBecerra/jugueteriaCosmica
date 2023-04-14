import { Router } from "express";
import ProductRouter from "../modules/Product/ProductoRouter.js"



const PrincipalRouter = Router();

PrincipalRouter.use("/api", ProductRouter)



export default PrincipalRouter