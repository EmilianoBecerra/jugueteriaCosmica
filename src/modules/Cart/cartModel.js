import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    items: [{
        productId: {type: Number, required:true},
        quantity: {type: Number, default: 1, min: 0},
        
    }],
    
    state:{type:String, default: 'active', enum:['active', 'inactive', 'finish']},

    total: Number
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;