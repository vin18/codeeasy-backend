import Product from './src/models/product.model';
import User from './src/models/user.model';
import connectDb from './src/utils/connectDb';
import logger from './src/utils/logger';
import users from './src/mockData/users';
import products from './src/mockData/products';

connectDb();

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers.find((user) => user.role === 'admin');

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser?._id };
    });
    await Product.insertMany(sampleProducts);

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
    await Product.deleteMany();

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
