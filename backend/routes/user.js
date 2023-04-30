import { Router } from "express";
import User from "../controller/user.js";

const router = Router();

router.get('/', User.getAll);

router.post('/create', User.create);

router.post('/login', User.login);

router.post('/edit/:id', User.update);

router.get('/delete/:id', User.delete);

export default router;