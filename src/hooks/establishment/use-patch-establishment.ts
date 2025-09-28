import { patchEstablishmentService } from '@/service/establishment/patch-establishment-service';
import type { EstablishmentUpdateInput } from '@/types/establishment/patch.establishment';
import type { Establishment } from '@/types/establishment/post-establishment';
import { useMutation } from '@tanstack/react-query';

export function usePutEstablishment() {
  return useMutation<
    Establishment,
    Error,
    { id: string; data: EstablishmentUpdateInput }
  >({
    mutationFn: async ({ id, data }) => {
      const result = await patchEstablishmentService.update(id, data);

      return {
        ...result,
        createdAt: new Date(result.createdAt),
        updatedAt: new Date(result.updatedAt),
      };
    },
  });
}
