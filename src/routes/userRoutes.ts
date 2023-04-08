import { Router } from 'express';
import {
  registerUserHandler,
  loginUserHandler,
  logoutUserHandler,
} from '../controllers/user.controller';

const router = Router();

router.route(`/register`).post(registerUserHandler);
router.route(`/login`).post(loginUserHandler);
router.route(`/logout`).get(logoutUserHandler);

export default router;
