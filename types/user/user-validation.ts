import { z } from 'zod';
import { UserSchema } from './user-types';

export type UserType = z.infer<typeof UserSchema>;
