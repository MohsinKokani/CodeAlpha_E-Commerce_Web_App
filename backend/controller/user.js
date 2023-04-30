import mongoose from "mongoose";
import { cartModel, userModel } from "../models/collectionStruct.js"

class User {
    static getAll = async (req, res) => {
        const result = await userModel.find({});
        res.send(result)
    }

    static create = async (req, res) => {
        try {
            const { email, firstName, lastName, password } = req.body;

            // check if email is already registered
            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                return res.status(400).send('Email already registered');
            }

            // create a new cart document
            const cart = new cartModel({
                _id: new mongoose.Types.ObjectId(),
                items: []
            });
            const savedCart = await cart.save();

            // create a new user document and store the cart ID
            const user = new userModel({
                _id: new mongoose.Types.ObjectId(),
                email,
                firstName,
                lastName,
                password,
                cart: savedCart._id
            });
            user.save()
                .then((savedUser) => {
                    console.log('User saved successfully:', savedUser);
                    res.send(`Welcome ${firstName + ' ' + lastName}`);
                })
                .catch((err) => {
                    console.error('Error saving user:', err);
                    res.send("unable to save details")
                });

        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Server error' });
        }
    }

    static login = async (req, res) => {
        try {
          const { email, password } = req.body;
      
          // check if user exists
          const user = await userModel.findOne({ email });
          if (!user) {
            return res.status(400).send('User does not exist');
          }
      
          // check if password matches
          const isMatch = password === user.password;
          if (!isMatch) {
            return res.status(400).send('Invalid password');
          }
      
          // return user document if both email and password are correct
          res.send(user);
      
        } catch (err) {
          console.log(err);
          res.status(500).json({ message: 'Server error' });
        }
      }
      

    static update = async (req, res) => {
        res.send("updation yet to implement")
    }

    static delete = async (req, res) => {
        res.send("deletion yet to implement")
    }
}

export default User;