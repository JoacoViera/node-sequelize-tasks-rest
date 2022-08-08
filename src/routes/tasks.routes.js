import { Router } from 'express';
import {
  createTask, deleteTask, getTasks, updateTask, getTask,
} from '../controllers/tasks.controller.js';

const router = Router();

router.get('/projects', getTasks);
router.post('/projects', createTask);
router.put('/projects/:id', updateTask);
router.delete('/projects/:id', deleteTask);
router.get('/projects/:id', getTask);

export default router;
