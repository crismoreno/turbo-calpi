import { Router } from "express";
import testController from "../controllers/test";
import projectsController from "../controllers/projects";

const router = Router();

router.get("/hello-world", testController.helloWorld);
router.get("/projects", projectsController.list);

export default router;
