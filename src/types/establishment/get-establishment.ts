import { z } from 'zod';

export type EstablishmentResponse = {
  id: string;
  name: string;
  ownerId: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
};

export const establishmentSchema = z.object({
  id: z.string(),
  name: z.string(),
  ownerId: z.string(),
  address: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type EstablishmentResponseZod = z.infer<typeof establishmentSchema>;
