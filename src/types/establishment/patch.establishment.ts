import { z } from 'zod';

export const establishmentUpdateSchema = z.object({
  name: z.string().min(1, 'Nome obrigatório').optional(),
  address: z.string().optional(),
  street: z.string().optional(),
  number: z.string().optional(),
  complement: z.string().optional(),
  neighborhood: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  zipCode: z.string().optional(),
});

export type EstablishmentUpdateInput = z.infer<
  typeof establishmentUpdateSchema
>;
