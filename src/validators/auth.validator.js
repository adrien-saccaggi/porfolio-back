import { body } from "express-validator";
export const validateAuth = [
  body("email").notEmpty().isEmail().withMessage("Email invalide"),
  body("password")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Mot de passe trop court"),
];
