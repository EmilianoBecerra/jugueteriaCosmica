import { ObjectId } from "mongodb";
import mongoose, {ObjectId} from "mongoose";

const cartSchema = new mongoose.Schema({
    items: [{
        productId: {type: ObjectId, required:true},
        quantity: {type: Number, default: 1, min: 0},
        
    }],
    userId: ObjectId,
    state:{type:String, default: 'active', enum:['active', 'inactive', 'finish']},

    total: Number
});

const productCart = mongoose.model('Carrito', cartSchema);

export default productCart;