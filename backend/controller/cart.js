import { cartModel, tshirtModel, userModel } from "../models/collectionStruct.js";


class Cart {
    static addProd = async (req, res) => {
        try {
            // Get the user ID and product ID from the request
            const userId = req.body._id;
            const productId = req.body.productId;

            // Find the user and cart
            const user = await userModel.findById(userId);
            if (!user) {
                return res.status(400).send('User not found');
            }
            const cart = await cartModel.findById(user.cart);

            // Find the product
            const product = await tshirtModel.findById(productId);
            if (!product) {
                return res.status(400).send('Product not found');
            }

            // Add the product to the cart
            const cartItem = {
                productId: product._id,
                quantity: 1,
                price: product.price
            };
            cart.items.push(cartItem);
            await cart.save();

            // Return the updated cart
            res.send("ADDED successfully")
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    }

    static getAll = async (req, res) => {
        res.send("all data of product")
    }

    static update = async (req, res) => {
        res.send("updation yet to implement")
    }

    static delete = async (req, res) => {
        res.send("deletion yet to implement")
    }
}

export default Cart;