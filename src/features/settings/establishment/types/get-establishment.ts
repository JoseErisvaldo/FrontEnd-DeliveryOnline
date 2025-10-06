import { z } from 'zod';

export const establishmentSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string().nullable().optional(),
  street: z.string().nullable().optional(),
  number: z.string().nullable().optional(),
  complement: z.string().nullable().optional(),
  neighborhood: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  state: z.string().nullable().optional(),
  country: z.string().nullable().optional(),
  zipCode: z.string().nullable().optional(),
  photo: z.string().nullable().optional(),
  ownerId: z.string(),
  statusId: z.number().nullable().optional(),
  statusName: z.string().nullable().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type EstablishmentSchemaZod = z.infer<typeof establishmentSchema>;
