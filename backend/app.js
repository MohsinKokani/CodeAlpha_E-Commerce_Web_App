import express from "express";
import TshirtRoute from './routes/tshirt.js';
import userRoute from './routes/user.js';
import cartRoute from './routes/cart.js'
import connectDB from "./db/connectdb.js";
import cors from 'cors';
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 3001;

const DBlink =process.env.MONGO_CONNECT_LINK;

connectDB(DBlink);

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(express.json());
app.use('/tshirt', TshirtRoute);
app.use('/user', userRoute);
app.use('/cart', cartRoute);

app.get('/', (req, res) => {
    res.send('home page')
});

app.listen(PORT, () => {
    console.log(`Listenning at "http://localhost:${PORT}"`)
});