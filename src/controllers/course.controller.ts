import { Request, Response } from 'express';
import { NotFoundError } from '../errors';
import Course from '../models/course.model';
import { StatusCodes } from '../utils/statusCodes';

/**
 * @desc    Get all courses
 * @route   GET /api/v1/courses
 * @access  Public
 */
export async function getCoursesHandler(req: Request, res: Response) {
  const courses = await Course.find();
  return res.status(StatusCodes.OK).json(courses);
}

/**
 * @desc    Get single course
 * @route   GET /api/v1/courses/:courseId
 * @access  Public
 */
export async function getCourseHandler(req: Request, res: Response) {
  const { courseId } = req.params;

  const course = await Course.findById(courseId);
  if (!course) {
    throw new NotFoundError(`No course found with id - ${courseId}`);
  }

  return res.status(StatusCodes.OK).json(course);
}
