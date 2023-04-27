import { Router } from 'express';
import {
  registerUserHandler,
  loginUserHandler,
  logoutUserHandler,
} from '../controllers/user.controller';
import { protect } from '../middlewares/authorization';

const router = Router();

router.route(`/register`).post(registerUserHandler);
router.route(`/login`).post(loginUserHandler);
router.route(`/logout`).get(protect, logoutUserHandler);

export default router;
