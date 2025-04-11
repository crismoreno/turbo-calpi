import { Router } from "express";
import projectsController from "../controllers/projects";

const router = Router();

// GET projects --> NO auth required
router.get("/projects", projectsController.list);

export default router;
