import getAllEstablishments from '@/features/settings/establishment/api/get-all-establishments';
import { establishmentSchema } from '@/features/settings/establishment/types/get-establishment';
import { z } from 'zod';

export const getAllEstablishmentsService = {
  fetchAll: async () => {
    const data = await getAllEstablishments();
    const parsed = z.array(establishmentSchema).parse(data);
    return parsed;
  },
};
