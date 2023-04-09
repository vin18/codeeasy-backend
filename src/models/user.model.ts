import mongoose from 'mongoose';
import config from 'config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export interface UserDocument extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  role?: string;
  createdAt?: Date;
  updatedAt?: Date;
  comparePassword(candidatePassword: string): Promise<Boolean>;
  createJWT(): string;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    address: { type: String, trim: true },
    city: { type: String, trim: true },
    postalCode: { type: String, trim: true },
    country: { type: String, trim: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  let user = this as UserDocument;

  if (!user.isModified('password')) {
    return next();
  }

  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;

  return next();
});

userSchema.methods.createJWT = function () {
  const jwtSecret = config.get<string>('jwtSecret');
  const jwtExpiry = config.get<string>('jwtExpiresIn');

  return jwt.sign({ userId: this._id }, jwtSecret, { expiresIn: jwtExpiry });
};

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as UserDocument;
  return bcrypt.compare(candidatePassword, user.password).catch(() => false);
};

const User = mongoose.model<UserDocument>('User', userSchema);
export default User;
