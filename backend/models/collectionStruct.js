import mongoose from "mongoose";


const tshirtSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    sizes: { type: [String], required: true },
    image: { type: String, required: true },
    featured: { type: Boolean, default: false },
    purchases: { type: Number, default: 0 }
})

const tshirtModel = mongoose.model('TShirt', tshirtSchema);

const cartSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    items: [{
        productId: mongoose.Schema.Types.ObjectId,
        quantity: Number,
        price: Number
    }]
})

const cartModel = mongoose.model('Cart', cartSchema);


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }
});

const userModel = mongoose.model('User', userSchema);

export { tshirtModel, cartModel, userModel };