import { body, param } from "express-validator";
export const validateProject = [
  body("title").notEmpty().isLength({ min: 2 }).isLength({ max: 150 }),
  body("description").optional().isLength({ max: 2000 }),
  body("tech_stack").optional().isLength({ max: 255 }),
  body("github_url").optional().isURL(),
  body("demo_url").optional().isURL(),
  body("image_url").optional().isURL(),
];
