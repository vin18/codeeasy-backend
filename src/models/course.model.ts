import mongoose from 'mongoose';

export interface CourseDocument extends mongoose.Document {
  name: string;
  heading: string;
  description: string;
  image: string;
  instructor: string;
  instructor_description: string;
  price: number;
  prerequisites: string;
  level: string;
  duration: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    heading: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    instructor: { type: String, required: true },
    instructor_description: { type: String, required: true },
    price: { type: Number, required: true },
    prerequisites: { type: String, required: true },
    level: { type: String, required: true },
    duration: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model<CourseDocument>('Course', courseSchema);
export default Course;
