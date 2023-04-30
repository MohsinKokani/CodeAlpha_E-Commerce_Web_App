import { Router } from "express";
import Cart from "../controller/cart.js";

const router = Router();

router.post('/addProd', Cart.addProd);

router.post('/allProd', Cart.getAll);

router.post('/edit/:id', Cart.update);

router.get('/delete/:id', Cart.delete);

export default router;