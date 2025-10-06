import { updateEstablishmentApi } from '@/features/settings/establishment/api/patch-establishment';
import {
  establishmentUpdateSchema,
  type EstablishmentUpdateInput,
} from '@/features/settings/establishment/types/patch.establishment';
import type { Establishment } from '@/features/settings/establishment/types/post-establishment';

export const patchEstablishmentService = {
  update: async (id: string, payload: unknown): Promise<Establishment> => {
    const validatedPayload: EstablishmentUpdateInput =
      establishmentUpdateSchema.parse(payload);
    const data = await updateEstablishmentApi(id, validatedPayload);
    return establishmentUpdateSchema.parse(data) as unknown as Establishment;
  },
};
