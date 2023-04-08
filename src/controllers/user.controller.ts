import config from 'config';
import { Request, Response } from 'express';
import { BadRequestError } from '../errors';
import UnAuthenticatedError from '../errors/unauthenticated';
import User, { UserDocument } from '../models/user.model';
import { LoginUserInput, RegisterUserInput } from '../schema/user.schema';
import { StatusCodes } from '../utils/statusCodes';

const sendResponse = (
  user: UserDocument,
  res: Response,
  statusCode: number
) => {
  const token = user.createJWT();

  const jwtExpiry = Number(config.get<string>('jwtExpiresIn'));
  const nodeEnv = config.get<string>('nodeEnv');

  const oneDay = 1000 * 60 * 60 * 24;
  const cookieOptions = {
    expires: new Date(Date.now() + jwtExpiry * oneDay),
    httpOnly: true,
    secure: nodeEnv === 'production',
  };

  user.password = '';
  res.cookie('token', token, cookieOptions);

  res.status(statusCode).json({
    success: true,
    user,
  });
};

/**
 * @desc    Register user
 * @route   POST /api/v1/users/register
 * @access  Public
 */
export async function registerUserHandler(
  req: Request<{}, {}, RegisterUserInput['body']>,
  res: Response
) {
  try {
    const { name, email, password } = req.body;
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      throw new BadRequestError(`Email already exists!`);
      return;
    }

    const user = await User.create({ name, email, password });
    sendResponse(user, res, StatusCodes.CREATED);
  } catch (error) {}
}

/**
 * @desc    Login user
 * @route   POST /api/v1/users/login
 * @access  Public
 */
export async function loginUserHandler(
  req: Request<{}, {}, LoginUserInput['body']>,
  res: Response
) {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new BadRequestError(`Email already exists!`);
    return;
  }

  const isPasswordCorrect = await user?.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError(`Invalid credentials!`);
    return;
  }

  sendResponse(user, res, StatusCodes.OK);
}

/**
 * @desc    Logout user
 * @route   GET /api/v1/users/logout
 * @access  Private
 */
export async function logoutUserHandler(req: Request, res: Response) {
  res.cookie('token', null, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });

  res.status(StatusCodes.OK).json({
    success: true,
    message: `User logged out`,
  });
}
