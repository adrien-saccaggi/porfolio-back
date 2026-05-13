import { Router } from "express";
import { createOneProject, deleteOneProject, getAllProjects, getOneProject, updateOneProject } from "../controllers/project.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { authorizeRoles } from "../middlewares/authorize.middleware.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { validateProject } from "../validators/project.validator.js";

const router = Router();

router.get("/", getAllProjects);
router.get("/:id", getOneProject);
router.post("/", authenticate, authorizeRoles('admin'),validate,validateProject,createOneProject,);
router.put("/:id", authenticate,authorizeRoles('admin'),validate , validateProject, updateOneProject)
router.delete("/:id", authenticate,authorizeRoles('admin'), deleteOneProject)


export default router;