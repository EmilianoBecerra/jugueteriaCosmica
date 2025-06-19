import { Router } from "express";
import ProductRouter from "../modules/Product/ProductoRouter.js"
import CartRouter from '../modules/Cart/CartRouter.js';

const PrincipalRouter = Router();

PrincipalRouter.use('/api', ProductRouter)
PrincipalRouter.use('/cart', CartRouter)

export default PrincipalRouter