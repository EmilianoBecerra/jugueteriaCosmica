import CartModel from './CartModel.js'

export const addCart = async (req,res)=>{
    const body = req.body
    try {
        const productsCart = await CartModel.create(body)
        res.json(console.log(productsCart))
    } catch (e) {
        res.json(e)
    }
}