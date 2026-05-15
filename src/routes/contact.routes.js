import { Router } from "express";
import {validateContact} from "../validators/contact.validator.js";
import { validate } from "../middlewares/auth.middleware.js"
import * as ContactController from "../controllers/contact.controller.js";


const router = Router();

router.post("/",validateContact,validate,ContactController.sendContact)
export default router;