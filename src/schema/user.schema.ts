import { object, string, TypeOf } from 'zod';

export const userSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }),
    password: string({
      required_error: 'Name is required',
    }).min(6, 'Password too short - should be 6 chars minimum'),
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email'),
  }),
});

export type RegisterUserInput = TypeOf<typeof userSchema>;
export type LoginUserInput = Omit<TypeOf<typeof userSchema>, 'body.name'>;
