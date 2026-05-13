import { Router } from "express";
import {validateContact} from "../validators/contact.validator.js";
import { validate } from "../middlewares/auth.middleware.js"

const router = Router();

router.post("/",sendContact, validateContact,validate)
export default router;