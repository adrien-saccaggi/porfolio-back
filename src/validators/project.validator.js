import { body, param } from "express-validator";
export const validateProject = [
  body("title")
    .notEmpty()
    .withMessage("Le titre est requis")
    .isLength({ min: 2 })
    .withMessage("le titre doit contenir au minumum 2 caractères")
    .isLength({ max: 150 })
    .withMessage("le titre doit contenir au maximum 150 caractères"),
  body("description")
    .optional()
    .isLength({ max: 2000 })
    .withMessage("la description doit contenir au maximum 2000 caractères"),
  body("tech_stack").optional().isLength({ max: 255 }),
  body("github_url")
    .optional()
    .isURL()
    .withMessage("ce lien n'est pas au bon format"),
  body("demo_url")
    .optional()
    .isURL()
    .withMessage("ce lien n'est pas au bon format"),
  body("image_url")
    .optional()
    .isURL()
    .withMessage("ce lien n'est pas au bon format"),
];