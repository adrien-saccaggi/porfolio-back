import { body, param } from "express-validator";
export const validateContact = [
  body("name").notEmpty().isLength({ min: 2 }).isLength({ max: 100 }),
  body("email").notEmpty().isEmail(),
  body("message").notEmpty().isLength({ min: 10 }).isLength({ max: 2000 }),
];