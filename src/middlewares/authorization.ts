import config from 'config';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UnAuthenticatedError } from '../errors';
import User, { UserDocument } from '../models/user.model';

export interface ExpressRequestInterface extends Request {
  user?: UserDocument;
}

/**
 * @desc  Protect API routes from unauthenticated users
 */
const protect = async (
  req: ExpressRequestInterface,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      throw new UnAuthenticatedError(
        `You don't have permission to access this resource`
      );
    }

    const jwtSecret = config.get<string>('jwtSecret');
    const decoded = jwt.verify(token, jwtSecret) as { userId: string };

    const user = await User.findById(decoded.userId);
    if (!user) {
      throw new UnAuthenticatedError(`User no longer exists`);
    }

    req.user = user;
    next();
  } catch (error) {
    throw error;
  }
};

export { protect };
