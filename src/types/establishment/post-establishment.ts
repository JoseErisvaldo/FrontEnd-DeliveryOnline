export interface Establishment {
  id: number;
  name: string;
  address?: string;
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

import { z } from "zod";

export const establishmentCreateSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
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

export type EstablishmentCreateInput = z.infer<typeof establishmentCreateSchema>;
