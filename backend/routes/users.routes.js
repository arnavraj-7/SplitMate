import {Router} from "express";
import { getUser, postUser } from "../controllers/user.controller.js";
const router = Router();

router.get('/users/:id',getUser);
router.post('/users/',postUser);

export default router