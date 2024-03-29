import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from '../utils/statusCodes';

const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);

  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, try again later',
  };

  if (err.name === 'CastError') {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `Invalid ${err.path}: ${err.value}`;
  }

  if (err.name === 'ValidationError') {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = Object.values(err.errors)
      .map((item: any) => item.message)
      .join(', ');
  }

  if (err?.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`;
  }

  if (err.name === 'JsonWebTokenError') {
    defaultError.statusCode = StatusCodes.UNAUTHORIZED;
    defaultError.msg = `Invalid token. Please log in again!`;
  }

  if (err.name === 'TokenExpiredError') {
    defaultError.statusCode = StatusCodes.UNAUTHORIZED;
    defaultError.msg = `Your token has expired! Please log in again.`;
  }

  return res
    .status(defaultError.statusCode)
    .json({ success: false, error: defaultError.msg });
};

export default errorHandlerMiddleware;
