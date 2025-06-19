import { Router } from "express";
import * as CartController from "../Cart/cartController.js"


const CartRouter = Router()


CartRouter.post("/pagar", CartController.addCart)


export default CartRouter


