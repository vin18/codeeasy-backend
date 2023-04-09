import bcrypt from 'bcrypt';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    role: 'admin',
  },

  {
    name: 'Walter White',
    email: 'walter@example.com',
    password: bcrypt.hashSync('123456', 10),
    role: 'user',
  },

  {
    name: 'Jon Snow',
    email: 'jon@example.com',
    password: bcrypt.hashSync('123456', 10),
    role: 'user',
  },
];

export default users;
