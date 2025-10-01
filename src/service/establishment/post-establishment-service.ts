import { createEstablishmentApi } from '@/api/establishment/post-establishment';
import { establishmentCreateSchema } from '@/types/establishment/post-establishment';
import type {
  Establishment,
  EstablishmentCreateInput,
} from '@/types/establishment/post-establishment';

export const establishmentService = {
  create: async (payload: unknown): Promise<Establishment> => {
    console.log('Creating establishment with payload:', payload);
    const validatedPayload: EstablishmentCreateInput =
      establishmentCreateSchema.parse(payload);

    const data = await createEstablishmentApi(validatedPayload);
    console.log('Establishment created:', data);
    return establishmentCreateSchema.parse(data) as unknown as Establishment;
  },
};
