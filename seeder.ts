import courses from './src/mockData/courses';
import users from './src/mockData/users';
import Course from './src/models/course.model';
import User from './src/models/user.model';
import connectDb from './src/utils/connectDb';
import logger from './src/utils/logger';

connectDb();

const importData = async () => {
  try {
    await Course.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers.find((user) => user.role === 'admin');

    const sampleCourses = courses.map((course) => {
      return { ...course, user: adminUser?._id };
    });
    await Course.insertMany(sampleCourses);

    logger.info(`Data Imported!`);
    process.exit();
  } catch (error) {
    logger.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Course.deleteMany();

    logger.info(`Data Destroyed`);
    process.exit();
  } catch (error) {
    logger.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] == '-d') {
  destroyData();
} else {
  importData();
}
