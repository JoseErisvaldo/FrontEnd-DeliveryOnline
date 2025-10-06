import { z } from 'zod';

export const establishmentUpdateSchema = z.object({
  name: z.string().min(1, 'Nome obrigatório').optional(),
  photo: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  street: z.string().nullable().optional(),
  number: z.string().nullable().optional(),
  complement: z.string().nullable().optional(),
  neighborhood: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  state: z.string().nullable().optional(),
  country: z.string().nullable().optional(),
  zipCode: z.string().nullable().optional(),
});

export type EstablishmentUpdateInput = z.infer<
  typeof establishmentUpdateSchema
>;
