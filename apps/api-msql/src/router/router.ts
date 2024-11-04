import {Router} from 'express';
import testController from '../controllers/projects'

const router = Router();

router.get('/projects', testController.getAllShowableProjects)

export default router;