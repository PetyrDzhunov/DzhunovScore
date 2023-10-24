import { z } from 'zod';

export const UserSchema = z.object({
  username: z.string().min(3, { message: 'Username is too short' }),
  email: z.string().email({ message: 'Invalid email format' }),
  password: z.string().min(6, { message: 'Password is too short.' }),
});

export const UserLoginSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  password: z.string().min(6, { message: 'Password is too short.' }),
});
