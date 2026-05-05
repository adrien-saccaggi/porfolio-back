import { router } from "express";
import { validateAuth } from "../validators/auth.validator";
import validate from "../middlewares/validate.middleware";

router.post("/login",validateAuth,validate)