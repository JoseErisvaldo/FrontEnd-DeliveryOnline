import { createEstablishmentApi } from '@/features/settings/establishment/api/post-establishment';
import { establishmentCreateSchema } from '@/features/settings/establishment/types/post-establishment';
import type {
  Establishment,
  EstablishmentCreateInput,
} from '@/features/settings/establishment/types/post-establishment';

export const postEstablishmentService = {
  create: async (payload: unknown): Promise<Establishment> => {
    console.log('Creating establishment with payload:', payload);
    const validatedPayload: EstablishmentCreateInput =
      establishmentCreateSchema.parse(payload);

    const data = await createEstablishmentApi(validatedPayload);
    console.log('Establishment created:', data);
    return establishmentCreateSchema.parse(data) as unknown as Establishment;
  },
};
