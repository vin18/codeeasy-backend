import { Router } from 'express';
import {
  getCoursesHandler,
  getCourseHandler,
} from '../controllers/course.controller';

const router = Router();

router.route(`/`).get(getCoursesHandler);
router.route(`/:courseId`).get(getCourseHandler);

export default router;
