import { z } from 'zod';

export type ProfileResponse = {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
};

export const profileSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  role: z.enum(['user', 'admin']),
});

export type ProfileResponseZod = z.infer<typeof profileSchema>;
