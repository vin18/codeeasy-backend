import { StatusCodes } from '../utils/statusCodes';
import CustomAPIError from './custom-api';

class BadRequestError extends CustomAPIError {
  statusCode: StatusCodes;

  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;
