import { Router } from "express";
import TshirtCollection from "../controller/tshirt.js";

const router = Router();

router.get('/', TshirtCollection.getAll);

router.post('/', TshirtCollection.create);

router.get('/edit/:id', TshirtCollection.edit);

router.post('/edit/:id', TshirtCollection.update);

router.get('/delete/:id', TshirtCollection.delete);

export default router;