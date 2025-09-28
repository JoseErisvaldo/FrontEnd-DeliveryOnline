import { updateEstablishmentApi } from '@/api/establishment/patch-establishment';
import {
  establishmentUpdateSchema,
  type EstablishmentUpdateInput,
} from '@/types/establishment/patch.establishment';
import type { Establishment } from '@/types/establishment/post-establishment';

export const patchEstablishmentService = {
  update: async (id: string, payload: unknown): Promise<Establishment> => {
    const validatedPayload: EstablishmentUpdateInput =
      establishmentUpdateSchema.parse(payload);
    const data = await updateEstablishmentApi(id, validatedPayload);
    return establishmentUpdateSchema.parse(data) as unknown as Establishment;
  },
};
