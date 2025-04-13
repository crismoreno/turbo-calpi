import { Router } from "express";
import projectsController from "../controllers/projects";

const router = Router();

// GET projects (visible=boolean&featured=boolean) --> NO auth required
router.get("/projects", projectsController.list);

// GET project by id --> NO auth required
router.get("/project/:id", projectsController.get);

export default router;
