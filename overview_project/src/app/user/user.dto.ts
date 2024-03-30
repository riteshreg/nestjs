import * as z from 'zod';

export const userSchema = z.object({
  name: z.string().min(3).max(200),
  email: z.string().email().min(3).max(100),
  password: z.string().min(5).max(50),
});

export type USER = z.infer<typeof userSchema>;

